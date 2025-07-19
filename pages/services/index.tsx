import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import ContentBlockImage from '@/components/Molecules/ContentBlockImage';
import Layout from '@/components/Templates/Layout';
import ServiceCard from '@/components/Molecules/ServiceCard';
import SquaresCircle from '@/components/Atoms/Svg/SquaresCircle';
import DecorativeBar from '@/components/Atoms/Svg/DecorativeBar';
import { getServicePageInfo } from '@/utils/lib/api';
import { InferGetStaticPropsType } from 'next';
import { useModal } from '@/hooks/useModal';

export async function getStaticProps(context: any) {
  const { locale } = context;
  const response = await getServicePageInfo('services', [locale]);
  const data = response?.data || [];

  return {
    props: {
      data,
    },
    revalidate: 100,
  };
}

export const Services = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { toggleModal } = useModal();

  const { t } = useTranslation('common');
  const content = data?.service || {};
  return (
    <Layout title={content.heroSection?.title} description={content.heroSection?.description}>
      <section className='px-4 w-full bg-ea-verde-oscuro-400'>
        <article className='gap-6 items-center pt-8 pb-16 mx-auto text-6xl 2xl:container lg:flex'>
          <div className='block mr-auto mb-6 w-1/2 lg:hidden'>
            <Image src='/halfCircle.png' width={350} height={300} alt='Half Circle' />
          </div>
          <ContentBlockImage
            title={content.heroSection?.title}
            titleClass='font-normal text-ea-amarillo w-11/12 text-pretty'
            subtitle={content.heroSection?.subtitle}
            subtitleClass='font-light text-white text-base md:text-3xl w-11/12'
            content={content.heroSection?.description}
            contentClass='text-ea-verde-300 font-normal text-xs md:text-lg w-11/12 text-pretty'
            rtl={false}
          >
            <div className='hidden mr-16 ml-auto w-fit lg:block'>
              <SquaresCircle />
            </div>
          </ContentBlockImage>
        </article>
      </section>

      <section className='w-full bg-gray-100'>
        <article className='container justify-between items-center px-4 py-24 mx-auto max-w-screen-xl lg:flex'>
          <div className='mb-6 lg:w-5/12'>
            <h1 className='text-4xl font-medium text-balance display-font md:text-6xl text-ea-verde-900'>
              {t('services_title_design-web')}
            </h1>
            <p className='text-base font-light 2xl:pe-20 2xl:mt-4 text-pretty md:text-3xl text-ea-verde-900'>
              {t('services_paragraph_design-web')}
            </p>
          </div>
          <div className='lg:w-7/12'>
            <div className='flex flex-col gap-6 w-full lg:flex-row'>
              {content.services1.map((service: any) => (
                <div className='w-full' key={service.title}>
                  <ServiceCard service={service} onClick={() => toggleModal()} />
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className='w-full'>
        <article className='relative px-4 mx-auto lg:py-32'>
          <div className='lg:w-11/12 md:mx-auto'>
            <div className='gap-12 mx-auto my-10 w-full 2xl:justify-center lg:flex xl:w-4/5 2xl:w-full'>
              <div className=''>
                <Image
                  src='/Square4Col.png'
                  width={590}
                  height={520}
                  alt='Square4Col'
                  className='hidden mr-20 ml-auto 2xl:block'
                />
              </div>
              <div className='mb-8 w-full lg:mt-8 lg:w-3/4 2xl:w-1/2'>
                <h1 className='mb-2 text-4xl font-medium lg:mb-4 text-balance display-font md:text-6xl text-ea-verde-900'>
                  {t('services_title_strategies')}
                </h1>
                <p className='text-base font-light 2xl:mt-4 text-pretty 2xl:text-balance md:text-3xl text-ea-verde-900'>
                  {t('services_paragraph_strategies')}
                </p>
              </div>
              <div className='lg:flex 2xl:w-1/4'>
                <div className='flex flex-col items-end'>
                  <ServiceCard service={content.serviceCard2[0]} onClick={() => toggleModal()} />
                  <Image
                    src='/Square2Col.png'
                    width={600}
                    height={210}
                    alt='Square2Col'
                    className='hidden mx-auto mt-8 lg:block 2xl:hidden'
                    priority
                  />
                </div>
                <Image
                  src='/Square1Col.png'
                  width={516}
                  height={209}
                  alt='Square1Col'
                  className='mx-auto mt-8 sm:hidden'
                  priority
                />
                <Image
                  src='/Square2Col.png'
                  width={463}
                  height={116}
                  alt='Square2Col'
                  className='hidden mx-auto mt-8 sm:block lg:hidden'
                  priority
                />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className='w-full bg-gray-100'>
        <article className='container justify-between items-center px-4 py-24 mx-auto max-w-screen-xl lg:flex'>
          <div className='mb-6 lg:w-5/12'>
            <h1 className='text-4xl font-medium text-balance display-font md:text-6xl text-ea-verde-900'>
              {t('services_title_marketing')}
            </h1>
            <p className='text-base font-light 2xl:pe-20 2xl:mt-4 text-pretty md:text-3xl text-ea-verde-900'>
              {t('services_paragraph_marketing')}
            </p>
          </div>
          <div className='lg:w-7/12'>
            <div className='flex flex-col gap-6 w-full lg:flex-row'>
              {content.serviceCard3?.map((service: any) => (
                <div className='w-full' key={service.title}>
                  <ServiceCard
                    key={service.title}
                    service={service}
                    onClick={() => toggleModal()}
                  />
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className='overflow-hidden relative w-full'>
        <div className='hidden absolute left-0 -bottom-28 lg:block 2xl:hidden'>
          <Image
            src='/SunLinesMobile.png'
            width={660}
            height={400}
            alt='Sun Lines Mobile'
            className='object-cover w-full h-full'
          />
        </div>
        <div className='hidden absolute bottom-0 left-0 2xl:block'>
          <Image src='/SunLines.png' width={792} height={480} alt='Sun Lines' />
        </div>
        <article className='relative px-4 mx-auto lg:py-32'>
          <div className='lg:w-11/12 md:mx-auto'>
            <div className='gap-10 justify-center mx-auto my-24 w-full 2xl:justify-end 2xl:items-center lg:flex xl:w-4/5 2xl:w-full'>
              <div className='w-full lg:w-1/2 2xl:w-1/3'>
                <h1 className='mb-2 text-4xl font-medium lg:mb-4 text-balance display-font md:text-6xl text-ea-verde-900'>
                  {t('services_title_brand')}
                </h1>
                <div className='mb-8 text-base 2xl:mt-4 text-pretty 2xl:text-balance md:text-3xl text-ea-verde-900'>
                  <h3 className='mb-4 font-normal'>{t('services_subtitle_brand')}</h3>
                  <p className='font-light'>{t('services_paragraph_brand')}</p>
                </div>
              </div>
              <div className='lg:flex 2xl:w-1/4'>
                <ServiceCard service={content.serviceCard4[0]} onClick={() => toggleModal()} />
              </div>
            </div>
          </div>
        </article>
        <div className='hidden absolute left-0 -top-4 lg:block text-ea-verde-500'>
          <DecorativeBar />
        </div>
      </section>

      <section className='overflow-hidden relative w-full bg-ea-verde-oscuro-400'>
        <article className='container flex-row-reverse px-4 pt-14 mx-auto sm:py-32 sm:flex'>
          <ContentBlockImage
            title={content.section1?.title}
            titleClass='text-ea-verde-500 sm:w-1/2 md:w-full mr-auto font-medium'
            content={content.section1?.subtitle}
            contentClass='text-white font-normal text-base lg:text-3xl w-5/6 mr-auto 2xl:text-balance'
            btnLabel={t('wanna_know_more')}
            btnClass='btn btn-outline'
            onClick={e => {
              e.preventDefault();
              toggleModal();
            }}
            rtl={false}
          >
            <div>
              <p className='text-sm font-normal leading-6 md:text-lg text-ea-verde-200'>
                {content.content}
              </p>
              <div className='w-full h-[1.5px] my-4 bg-ea-verde-500' />
              <h3 className='text-2xl font-light md:text-3xl text-ea-amarillo-500'>
                {content.testimonial?.testimonialText}
              </h3>
              <div className='items-center mt-4 md:flex'>
                <div className='flex items-center'>
                  <div className='rounded-full size-32'>
                    <Image
                      src={content.testimonial?.image.url || ''}
                      width={64}
                      height={64}
                      alt='Imagen de autor'
                      className='object-contain w-full h-full'
                    />
                  </div>

                  <div className='px-4 text-ea-verde-oscuro-500'>
                    <h3 className='text-sm font-normal text-gray-100 md:text-lg'>
                      {content.testimonial?.autorName}
                    </h3>
                    <p className='text-sm font-normal text-gray-100 md:text-lg'>
                      {content.testimonial?.autorRole}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ContentBlockImage>
          <div>
            <Image
              src='/mobileCircleGreen.png'
              width={750}
              height={350}
              alt='Circle Green'
              className='object-cover w-full sm:hidden'
            />
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Services;
