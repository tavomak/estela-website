import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { InferGetStaticPropsType } from 'next';
import { sliderSettings } from '@/utils/constants';
import { getHomePageInfo } from '@/utils/lib/api';
import { Testimonial } from '@/components/Molecules/Testimonial/types';
import { useModal } from '@/hooks/useModal';
import { useTranslations } from 'next-intl';
import { loadMessages } from '@/utils/i18n/getMessages';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';
import Layout from '@/components/Templates/Layout';
import FadeIn from '@/components/Atoms/FadeIn';
import Marquee from '@/components/Molecules/Marquee';
import ScrollTriggered from '@/components/Atoms/ScrollTriggered';
import GeometricShape from '@/components/Atoms/Svg/GeometricShape';
import Testimonials from '@/components/Molecules/Testimonial';
import ContentBlockImage from '@/components/Molecules/ContentBlockImage';
import StickyColumns from '@/components/Templates/StickyColumn';
import MobileGeometricShape from '@/components/Atoms/Svg/MobileGeometricShape';
import DecorativeBar from '@/components/Atoms/Svg/DecorativeBar';
import SliderArrow from '@/components/Atoms/SliderArrow';
import VideoIframe from '@/components/Templates/VideoIframe';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dtzoftfps',
  },
});

export async function getStaticProps(context: any) {
  const { locale } = context;
  const messages = await loadMessages(locale);
  try {
    const response = await getHomePageInfo('home', [locale]);
    const data: any = (response?.data as any)?.homepage || null;
    return {
      props: {
        data,
        messages,
      },
      revalidate: 100,
    };
  } catch {
    return {
      props: {
        data: undefined,
        messages,
      },
      revalidate: 100,
    };
  }
}

export const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const t = useTranslations('common');
  const { toggleModal } = useModal();

  const handleToggleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleModal();
  };
  const content = data;

  return (
    <Layout
      title={content?.metaTitle || t('homepage.title')}
      description={content?.metaDescription || t('homepage.description')}
    >
      <section id='hero' className='relative pt-20 lg:py-30 flex flex-col lg:flex-row items-center'>
        <article className='px-4 mx-auto container flex flex-col lg:flex-row items-center gap-6'>
          <div className='lg:w-1/2'>
            <FadeIn>
              <h1 className='font-medium text-balance display-font text-5xl md:text-7xl xl:text-8xl text-ea-verde-900 lg:pe-20'>
                {content?.sectionHero?.title}
              </h1>
            </FadeIn>
            <FadeIn className='mt-4 lg:mt-6'>
              <p className='font-medium text-ea-verde-900 text-lg lg:max-w-md'>
                {content?.sectionHero?.subtitle}
              </p>
            </FadeIn>
          </div>
          <div className='flex flex-col gap-4 mt-6 lg:mt-0 lg:w-1/2'>
            <FadeIn className='w-full'>
              <AdvancedVideo
                cldVid={cld.video('EE-video-web-1_txvucj')}
                autoPlay
                loop
                muted
                playsInline
                poster='/public/Square4Col.png'
                className='object-contain w-full h-full'
              />
            </FadeIn>
          </div>
        </article>

        <FadeIn className='hidden absolute right-0 -bottom-4 lg:block text-ea-verde-oscuro-300'>
          <DecorativeBar />
        </FadeIn>
      </section>

      <section id='why' className='px-4 lg:py-20 w-full bg-ea-verde-oscuro-500'>
        <article className='gap-8 items-center py-30 mx-auto container lg:flex'>
          <ContentBlockImage
            brandLogoColor='text-ea-verde'
            title={content?.section1?.title}
            titleClass='font-medium text-ea-amarillo'
            subtitle={content?.section1?.subtitle}
            subtitleClass='display-font font-medium text-white text-2xl md:text-3xl'
            btnLabel={t('lets_talk')}
            btnClass='btn btn-primary'
            rtl={false}
            onClick={handleToggleModal}
            content={content?.section1?.description}
            contentClass='text-white text-pretty'
          >
            <FadeIn className='hiddenmd:w-11/12 lg:block mt-4'>
              <AdvancedVideo
                cldVid={cld.video('EE-video-web-7-verde_wfzirm')}
                autoPlay
                loop
                muted
                playsInline
                poster='/public/Square4Col.png'
                className='object-contain w-full h-full'
              />
            </FadeIn>
          </ContentBlockImage>
        </article>
      </section>

      <section
        id='services'
        className="w-full px-6 bg-[url('/thinWaveBar.png')] 2xl:bg-[url('/waveBar.png')] bg-contain bg-no-repeat bg-top-right md:bg-top-left"
      >
        <article className='overflow-clip py-16 lg:py-30 2xl:container 2xl:mx-auto'>
          <div className='mx-auto w-full md:w-11/12 lg:p-0 lg:pl-6 3xl:pl-0'>
            <div className='mr-auto w-5/6 lg:w-full 2xl:w-4/5 lg:mx-auto'>
              <div className='my-10'>
                <StickyColumns
                  services={content?.services ?? []}
                  onServiceClick={() => toggleModal()}
                />
              </div>
            </div>
          </div>
        </article>
      </section>

      <FadeIn id='who' className=' bg-gray-50 lg:py-30'>
        <article>
          <div className='container pt-20 lg:pt-0 px-4 mx-auto'>
            <h2 className=' text-center text-4xl display-font lg:text-6xl font-medium text-ea-verde-900'>
              {t('homepage_trust_section_title')}
            </h2>
          </div>

          <Marquee className='py-20' duration={50}>
            {content?.trustedClients?.slice(4, 8).map((item: any) => (
              <Image
                key={item.id}
                src={item.url}
                alt='Logo client'
                width={260}
                height={120}
                loading='lazy'
                className='object-contain mx-10 w-auto h-16 md:h-20'
              />
            ))}
          </Marquee>

          <Marquee className='py-20' duration={50} direction='right'>
            {content?.trustedClients?.slice(0, 4).map((item: any) => (
              <Image
                key={item.id}
                src={item.url}
                alt='Logo client'
                width={260}
                height={120}
                loading='lazy'
                className='object-contain mx-10 w-auto h-16 md:h-20'
              />
            ))}
          </Marquee>
        </article>
      </FadeIn>

      <FadeIn id='testimonials' className='relative px-6 w-full xl:flex xl:px-0'>
        <FadeIn className='hidden xl:block'>
          <Image src='/testWave.png' alt='wave' width={240} height={1100} />
        </FadeIn>
        <article className='container overflow-hidden py-16 mx-auto my-auto'>
          <h2 className='text-4xl md:text-6xl font-medium display-font text-ea-verde-900 lg:py-4'>
            {(() => {
              const words = t('homepage_testimonials_section_title').split(' ');
              return (
                <>
                  {words.slice(0, 2).join(' ')} <br /> {words.slice(2).join(' ')}
                </>
              );
            })()}
          </h2>
          <div className='flex gap-4 mt-4 mr-auto'>
            <SliderArrow sliderId='slider2' />
          </div>
          <div
            id='slider2'
            className='overflow-hidden mt-8 md:overflow-visible slider-container testimonial-slider'
          >
            <Slider {...sliderSettings}>
              {content?.testimonials?.map((testimonial: Testimonial) => (
                <div key={testimonial.projectName} className='mx-auto w-11/12 md:w-full'>
                  <Testimonials {...testimonial} />
                </div>
              ))}
            </Slider>
          </div>
          <div className='hidden absolute right-0 -top-4 lg:block text-ea-verde-500'>
            <DecorativeBar />
          </div>
        </article>
      </FadeIn>

      <FadeIn
        id='contact'
        className='bg-ea-verde-oscuro-500 md:bg-[url("/tabletWave.png")] 2xl:bg-[url("/desktopWave.png")] bg-contain bg-no-repeat bg-bottom md:bg-top-right py-20 md:py-44'
      >
        <article className='px-4 mx-auto container'>
          <div className='max-w-1/2 flex flex-col gap-8'>
            <h2 className='display-font text-4xl lg:text-6xl text-ea-amarillo'>
              {content?.section2?.title}
            </h2>
            <h3 className='text-white display-font font-medium text-2xl md:text-3xl'>
              {content?.section2?.subtitle}
            </h3>
            <p className='text-white text-lg'>{content?.section2?.description}</p>
            <div>
              <button className='btn btn-outline' onClick={handleToggleModal} type='button'>
                {t('wanna_know_more')}
              </button>
            </div>
          </div>
        </article>
      </FadeIn>

      <FadeIn id='projects' className='px-6 w-full bg-gray-100'>
        <article className='py-12 mx-auto w-11/12 2xl:container lg:py-30 2xl:w-3/4'>
          <h2 className='mb-12 text-4xl font-medium lg:mb-24 lg:text-6xl display-font text-ea-verde-900'>
            {t('homepage_projects_section_title')}
          </h2>
          {content?.projects?.length > 0 && (
            <div>
              {content?.projects?.map((project: any, i: number) => (
                <div key={project.title}>
                  <ScrollTriggered index={i + 1} className='overflow-hidden'>
                    {project?.videoId && <VideoIframe videoId={project?.videoId} muted />}
                  </ScrollTriggered>
                  <div className='flex-row-reverse justify-between mb-10 lg:flex md:mb-20'>
                    <p className='mt-4 text-xs text-right md:w-5/12 text-balance lg:text-lg font-regular text-ea-verde-oscuro-500'>
                      {project.description}
                    </p>
                    <h2 className='mt-4 text-lg font-light lg:mt-8 lg:text-3xl text-ea-verde-oscuro-500'>
                      {project.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          )}
        </article>
      </FadeIn>

      <FadeIn id='promo' className='px-6 w-full bg-ea-verde-900'>
        <article className='overflow-hidden gap-8 items-center py-16 lg:flex lg:py-30 2xl:container 2xl:mx-auto'>
          <ContentBlockImage
            title={content?.section3?.title}
            titleClass='display-font text-4xl lg:text-6xl text-ea-amarillo'
            subtitle={content?.section3?.subtitle}
            subtitleClass='text-white display-font font-medium text-2xl md:text-3xl'
            content={content?.section3?.description}
            contentClass='text-white text-lg'
            btnLabel={t('homepage_contact_us')}
            btnClass='btn btn-outline'
            onClick={handleToggleModal}
            rtl={false}
          >
            <div className='mx-auto mt-8 w-11/12 lg:mt-0 lg:ml-auto'>
              <div className='hidden lg:block'>
                <GeometricShape />
              </div>
              <div className='flex justify-center lg:hidden'>
                <MobileGeometricShape />
              </div>
            </div>
          </ContentBlockImage>
        </article>
      </FadeIn>
    </Layout>
  );
};

export default Home;
