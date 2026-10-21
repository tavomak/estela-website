import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import ReCAPTCHA from 'react-google-recaptcha';
import TagManager from 'react-gtm-module';
import { environments } from '@/utils/constants';
import Button from '@/components/Atoms/Button';

type FormValues = {
  email: string;
  consent: boolean;
};

type Status = { kind: 'ok' | 'err' | ''; message: string };

const tagManagerArgs = {
  dataLayer: {
    event: 'newsletterSubscribe',
  },
};

const FormSubscribe = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: '', message: '' });
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const t = useTranslations('common');
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const handleClick = () => {
    setLoading(true);
    setStatus({ kind: '', message: t('tree_sending') });
    recaptchaRef.current?.execute();
  };

  const onReCAPTCHAChange = async (token: string | null) => {
    if (!token) {
      setLoading(false);
      setStatus({ kind: '', message: '' });
      recaptchaRef.current?.reset();
      return;
    }
    try {
      const response = await fetch('/api/resend-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          captcha: token,
          contact: {
            templateType: 'subscribe',
            email: getValues('email'),
            consent: getValues('consent'),
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setStatus({ kind: 'ok', message: t('tree_success') });
      reset();
      if (process.env.NODE_ENV === environments.production) {
        TagManager.dataLayer(tagManagerArgs);
      }
    } catch (error) {
      console.warn('error', error);
      setStatus({ kind: 'err', message: t('tree_error') });
    } finally {
      setLoading(false);
      recaptchaRef.current?.reset();
    }
  };

  const errorMessage = errors.email?.message || errors.consent?.message;
  const statusMessage = errorMessage || status.message;
  const statusClass =
    errorMessage || status.kind === 'err' ? 'text-[#FFB4A9]' : 'font-medium text-ea-amarillo';

  return (
    <form className='grid gap-3.5 mt-1.5' onSubmit={handleSubmit(handleClick)} noValidate>
      <ReCAPTCHA
        ref={recaptchaRef}
        size='invisible'
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
        onChange={onReCAPTCHAChange}
      />
      <label className='sr-only' htmlFor='sub-email'>
        {t('tree_email_label')}
      </label>
      <input
        id='sub-email'
        type='email'
        autoComplete='email'
        inputMode='email'
        placeholder={t('tree_email_placeholder')}
        aria-invalid={errors.email ? 'true' : 'false'}
        className='px-4 w-full bg-white min-h-[54px] text-ea-verde-oscuro-500 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ea-amarillo'
        {...register('email', {
          required: t('tree_error_email'),
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t('tree_error_email') },
        })}
      />
      <label
        htmlFor='sub-consent'
        className='flex gap-2.5 items-start text-sm leading-snug text-white/85'
      >
        <input
          id='sub-consent'
          type='checkbox'
          className='flex-none m-0 w-5 h-5 accent-ea-amarillo focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ea-amarillo'
          {...register('consent', { required: t('tree_error_consent') })}
        />
        {t('tree_consent')}
      </label>
      <Button
        className='justify-center items-center px-5 text-[15px] font-semibold tracking-[.04em] uppercase transition-colors cursor-pointer min-h-[54px] bg-ea-amarillo text-ea-verde-oscuro-500 hover:bg-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ea-amarillo'
        loading={loading}
        loadingType='dots'
        submit
      >
        {t('tree_subscribe')}
      </Button>
      <p role='status' aria-live='polite' className={`text-sm min-h-[1.4em] ${statusClass}`}>
        {statusMessage}
      </p>
    </form>
  );
};

export default FormSubscribe;
