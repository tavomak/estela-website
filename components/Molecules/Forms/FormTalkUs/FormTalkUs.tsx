import { useState, useRef, FC } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { environments } from '@/utils/constants';
import useTranslation from 'next-translate/useTranslation';
import ReCAPTCHA from 'react-google-recaptcha';
import useNotify from '@/hooks/useNotify';
import TagManager from 'react-gtm-module';
import Button from '@/components/Atoms/Button';
import Input from '@/components/Atoms/Input';
import { FormContactProps, FormElements } from './types';

const tagManagerArgs = {
  dataLayer: {
    event: 'regularConversion',
  },
};

const FormTalkUs: FC<FormContactProps> = ({
  service,
  title,
  image,
  content,
}) => {
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const form = useRef<FormElements | null>(null);
  const { t } = useTranslation('common');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [notification] = useNotify();

  const handleClick = () => {
    setLoading(true);
    if (recaptchaRef.current) {
      recaptchaRef.current.execute();
    }
  };

  const onReCAPTCHAChange = async (token: string | null) => {
    if (!token) {
      return;
    }
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ captcha: token }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const options = {
          method: 'POST',
          body: JSON.stringify({
            contact: {
              templateType: 'talkUs',
              clientName: form.current?.clientName?.value,
              organization: form.current?.organization?.value,
              email: form.current?.email?.value,
              subject: form.current?.subject?.value,
              message: form.current?.message?.value,
            },
          }),
        };

        const activeResponse = await fetch('/api/resend-email', options);
        const data = await activeResponse.json();

        if (data.error) {
          setLoading(false);
          notification('error', t('contact_error_message'));
        }

        setLoading(false);
        notification('success', t('contact_success_message'));
        reset();
        if (process.env.NODE_ENV === environments.production) {
          TagManager.dataLayer(tagManagerArgs);
        }
      }
      const error = await response.json();
      throw new Error(error.message);
    } catch (error) {
      console.warn('error', error);
      notification('error', t('contact_error_message'));
    } finally {
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    }
  };

  return (
    <form ref={form} className="form" onSubmit={handleSubmit(handleClick)}>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
        onChange={onReCAPTCHAChange}
      />
      <div className="hidden">
        <input type="hidden" name="service" value={service} />
        <input type="hidden" name="title" value={title} />
        <input type="hidden" name="image" value={image} />
        <input type="hidden" name="content" value={content} />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-ea-verde-200">
        <div className="form-group">
          <Input
            type="text"
            name="clientName"
            placeholder={t('homepage_talkUs_form_client_name')}
            rules={{
              required: t('homepage_talkUs_form_client_name_required'),
            }}
            errors={errors.clientName as FieldError}
            register={register}
            labelColor="border-ea-verde-200"
            bgLabelColor="bg-ea-verde-400"
          />
        </div>
        <div className="form-group">
          <Input
            type="text"
            name="organization"
            placeholder={t('homepage_talkUs_form_client_organization')}
            rules={{
              required: t('homepage_talkUs_form_client_organization_required'),
            }}
            errors={errors.organization as FieldError}
            register={register}
            labelColor="border-ea-verde-200"
            bgLabelColor="bg-ea-verde-400"
          />
        </div>
        <div className="form-group">
          <Input
            type="email"
            name="email"
            placeholder={t('homepage_talkUs_form_client_email')}
            rules={{
              required: t('homepage_talkUs_form_client_email_required'),
            }}
            errors={errors.email as FieldError}
            register={register}
            labelColor="border-ea-verde-200"
            bgLabelColor="bg-ea-verde-400"
          />
        </div>
        <div className="form-group">
          <Input
            type="text"
            name="subject"
            placeholder={t('homepage_talkUs_form_client_subject')}
            rules={{
              required: t('homepage_talkUs_form_client_subject_required'),
            }}
            errors={errors.subject as FieldError}
            register={register}
            labelColor="border-ea-verde-200"
            bgLabelColor="bg-ea-verde-400"
          />
        </div>
      </div>
      <div className="form-group">
        <label
          htmlFor="message"
          className="relative block px-4 pt-4 my-4 border shadow-sm border-ea-verde-200"
        >
          <textarea
            className="w-full text-sm bg-ea-verde-400 focus:outline-none focus-visible:outline-none"
            rows={8}
            id="message"
            {...register('message')}
          />
          <span className="text-ea-verde-200 pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-ea-verde-400 p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            {t('homepage_talkUs_form_client_message')}
          </span>
        </label>
      </div>
      <div className="text-center form-group">
        <Button
          className="text-xs font-normal tracking-widest uppercase btn btn-secondary text-ea-amarillo border-ea-amarillo me-4"
          loading={loading}
          loadingType="dots"
          submit
        >
          {t('homepage_talkUs_form_client_send')}
        </Button>
      </div>
    </form>
  );
};

export default FormTalkUs;
