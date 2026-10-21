import type { ReactNode } from 'react';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import Email from '@/components/Templates/Email';
import type { EmailTemplateProps } from '@/components/Templates/Email/types';

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_FIELD_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface CaptchaValidation {
  success: boolean;
  'error-codes'?: string[];
}

const verifyCaptcha = async (token: string): Promise<boolean> => {
  const params = new URLSearchParams({
    secret: process.env.RECAPTCHA_SECRET_KEY as string,
    response: token,
  });
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });
  const validation = (await response.json()) as CaptchaValidation;
  return validation.success;
};

const isValidString = (value: unknown, maxLength: number): value is string =>
  typeof value === 'string' && value.trim().length > 0 && value.length <= maxLength;

export const resendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  let body: unknown = req.body;
  if (typeof req.body === 'string') {
    try {
      body = JSON.parse(req.body);
    } catch {
      return res.status(422).json({ message: 'Invalid JSON body' });
    }
  }
  const { captcha, contact } = (body ?? {}) as { captcha?: unknown; contact?: unknown };

  if (!isValidString(captcha, 5000) || typeof contact !== 'object' || contact === null) {
    return res.status(422).json({ message: 'Missing required fields' });
  }

  const { email, message, templateType, consent } = contact as {
    email?: unknown;
    message?: unknown;
    templateType?: unknown;
    consent?: unknown;
  };
  const isSubscribe = templateType === 'subscribe';
  if (!isValidString(email, MAX_FIELD_LENGTH) || !EMAIL_REGEX.test(email)) {
    return res.status(422).json({ message: 'Invalid email' });
  }
  if (isSubscribe && consent !== true) {
    return res.status(422).json({ message: 'Consent required' });
  }
  if (!isSubscribe && !isValidString(message, MAX_MESSAGE_LENGTH)) {
    return res.status(422).json({ message: 'Invalid message' });
  }

  try {
    const captchaIsValid = await verifyCaptcha(captcha);
    if (!captchaIsValid) {
      return res.status(422).json({ message: 'Invalid captcha' });
    }

    if (isSubscribe) {
      const segmentId = process.env.RESEND_SEGMENT_ID as string;
      const created = await resend.contacts.create({ email, segments: [{ id: segmentId }] });
      // Existing contact → create fails; add it to the segment instead
      const subscribed = created.error
        ? await resend.contacts.segments.add({ email, segmentId })
        : created;
      if (subscribed.error) {
        return res.status(400).json({ error: subscribed.error });
      }

      // Notification is best-effort: the segment is the source of truth
      const notify = await resend.emails.send({
        from: 'No-reply <no-reply@mkt.estelaestudio.com>',
        to: ['contacto@estelaestudio.com'],
        subject: 'Nueva suscripción a promociones',
        react: Email({ templateType: 'subscribe', email }) as ReactNode,
      });
      if (notify.error) {
        console.warn('subscribe notification failed', notify.error);
      }

      return res.status(200).json({ data: subscribed.data });
    }

    const { data, error } = await resend.emails.send({
      from: 'No-reply <no-reply@mkt.estelaestudio.com>',
      to: ['accounts@estelaestudio.com'],
      subject: 'Nuevo mensaje de contacto',
      react: Email({ ...(contact as EmailTemplateProps) }) as ReactNode,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    return res.status(200).json({ data });
  } catch {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default resendEmail;
