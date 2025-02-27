import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import Email from '@/components/Templates/Email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const resendEmail = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { body } = req;

  const emailData = JSON.parse(body);
  const {
    contact: { ...templateData },
  } = emailData;
  try {
    const { data, error } = await resend.emails.send({
      from: 'No-reply <no-reply@mkt.estelaestudio.com>',
      to: ['accounts@estelaestudio.com'],
      subject: 'Nuevo mensaje de contacto',
      react: Email({
        ...templateData,
      }),
    });

    if (error) {
      res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default resendEmail;
