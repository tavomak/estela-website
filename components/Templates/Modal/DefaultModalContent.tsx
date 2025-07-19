import BrandLogoHorizontal from '@/components/Atoms/Svg/BrandLogoHorizontal';
import FormTalkUs from '@/components/Molecules/Forms/FormTalkUs';
import DecorativeBar from '@/components/Atoms/Svg/DecorativeBar';
import CircleCurves from '@/components/Atoms/Svg/CircleCurves';
import useTranslation from 'next-translate/useTranslation';

export const DefaultModalContent = () => {
  const { t } = useTranslation('common');

  return (
    <div className='overflow-hidden mx-auto w-full lg:flex'>
      <div className='w-full lg:hidden text-ea-verde-900'>
        <DecorativeBar />
      </div>
      <div className='hidden lg:w-2/5 bg-ea-verde-900 text-ea-verde-200 lg:block'>
        <CircleCurves />
      </div>
      <div className='py-4 mx-auto space-y-6 w-11/12 md:p-4 md:pt-12 lg:w-3/5'>
        <div className='space-y-4 w-full'>
          <div className='w-full max-w-40 md:max-w-56 text-ea-verde-500'>
            <BrandLogoHorizontal />
          </div>
          <h1 className='text-4xl font-semibold display-font lg:text-5xl text-ea-verde-900'>
            {t('homepage_talkUs_form_title')}
          </h1>
          <h2 className='text-lg font-light md:w-3/4 lg:text-2xl text-ea-verde-900'>
            {t('homepage_content_section_subtitle-2')}
          </h2>
        </div>

        <FormTalkUs
          service='Contacto'
          title='Escríbenos'
          image='/images/contact.png'
          content='Nos pondremos en contacto contigo lo antes posible'
        />
      </div>
    </div>
  );
};
