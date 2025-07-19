import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

interface CaptchaValidation {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body, method } = req;
  const { captcha } = body;

  if (method === 'POST') {
    if (!captcha) {
      return res.status(422).json({
        message: 'Unproccesable request, please provide the required fields',
      });
    }

    try {
      // Ping the google recaptcha verify API to verify the captcha code you received
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          },
          method: 'POST',
        }
      );
      const captchaValidation = (await response.json()) as CaptchaValidation;
      /**
       * The structure of response from the veirfy API is
       * {
       *  "success": true|false,
       *  "challenge_ts": timestamp,
       *  timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
       *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
       *  "error-codes": [...]        // optional
        }
       */
      if (captchaValidation.success) {
        return res.status(200).json({ ok: true });
      }

      return res.status(422).json({
        message: 'Unproccesable request, Invalid captcha code',
        captchaValidation,
      });
    } catch (error) {
      return res.status(422).json({ message: 'Something went wrong', error });
    }
  }
  return res.status(404).send('Not found');
}
