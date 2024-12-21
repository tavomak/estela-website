import { useState, useRef, FC } from 'react';
import { FieldError, useForm, Controller } from 'react-hook-form';
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

const FormContact: FC<FormContactProps> = ({
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
    control,
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
              email: form.current?.clientEmail?.value,
              firstName: form.current?.clientName?.value,
              lastName: form.current?.clientLastName?.value,
              phone: form.current?.clientPhone?.value,
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
      <div className="form-group">
        <Input
          type="text"
          name="clientName"
          placeholder={t('contact_form_client_name')}
          rules={{
            required: t('contact_form_client_name_required'),
          }}
          errors={errors.clientName as FieldError}
          register={register}
        />
      </div>
      <div className="form-group">
        <Input
          type="text"
          name="clientLastName"
          placeholder={t('contact_form_client_last_name')}
          rules={{
            required: t('contact_form_client_last_name_required'),
          }}
          errors={errors.clientLastName as FieldError}
          register={register}
        />
      </div>
      <div className="form-group">
        <Input
          type="email"
          name="clientEmail"
          placeholder={t('contact_form_client_email')}
          rules={{
            required: t('contact_form_client_email_required'),
          }}
          errors={errors.clientEmail as FieldError}
          register={register}
        />
      </div>
      <div className="form-group">
        <Controller
          control={control}
          name="clientPhone"
          rules={{
            required: t('contact_form_client_phone_required'),
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              phone
              type="text"
              name="clientPhone"
              placeholder={t('contact_form_client_phone')}
              onChange={onChange}
              value={value}
              errors={errors.clientPhone as FieldError}
            />
          )}
        />
      </div>
      <div className="form-group">
        <label
          htmlFor="message"
          className="relative block px-4 pt-4 my-4 border border-gray-200 rounded shadow-sm"
        >
          <textarea
            className="w-full text-sm focus:outline-none focus-visible:outline-none"
            rows={8}
            id="message"
            {...register('message')}
          />
          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            {t('contact_form_client_message')}
          </span>
        </label>
      </div>
      <div className="text-center form-group">
        <Button
          className="px-4 py-2 mt-4 btn btn-primary text-uppercase"
          loading={loading}
          loadingType="dots"
          submit
        >
          {t('contact_form_client_send')}
        </Button>
      </div>
    </form>
  );
};

export default FormContact;
