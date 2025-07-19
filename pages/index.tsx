import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { sliderSettings } from '@/utils/constants';
import { getHomePageInfo } from '@/utils/lib/api';
import { Testimonial } from '@/components/Molecules/Testimonial/types';
import { useModal } from '@/hooks/useModal';
import useTranslation from 'next-translate/useTranslation';
import CircleWhite from '@/components/Atoms/Svg/CircleWhite';
import Layout from '@/components/Templates/Layout';
import Spinner from '@/components/Atoms/Spinner';
import GeometricShape from '@/components/Atoms/Svg/GeometricShape';
import Testimonials from '@/components/Molecules/Testimonial';
import ContentBlockImage from '@/components/Molecules/ContentBlockImage';
import ServicesCard from '@/components/Molecules/ServiceCard';
import MobileGeometricShape from '@/components/Atoms/Svg/MobileGeometricShape';
import DecorativeBar from '@/components/Atoms/Svg/DecorativeBar';
import SliderArrow from '@/components/Atoms/SliderArrow';
import VideoIframe from '@/components/Templates/VideoIframe';
import Modal from '@/components/Templates/Modal';

export async function getStaticProps(context: any) {
  const { locale } = context;
  try {
    const response = await getHomePageInfo('home', [locale]);
    const data = response?.data?.homepage || [];
    return {
      props: {
        data,
      },
      revalidate: 100,
    };
  } catch {
    return {
      props: {
        data: undefined,
      },
    };
  }
}

export const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { toggleModal } = useModal();

  const handleToggleModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toggleModal();
  };
  const clientsSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          centerPadding: '150px',
        },
      },
    ],
  };

  const content = data;

  return (
    <Layout
      description='Diseñamos y desarrollamos servicios que faciliten a personas mostrarse, comunicarse y crecer haciendo uso de la tecnología y los medios digitales especialmente web'
      title='Experiencias de usuario inteligentes'
      className='justify-center items-center'
    >
      {router.isFallback ? (
        <div className='flex min-h-[calc(100vh-217px)] text-dark-blue justify-center items-center w-full'>
          <Spinner width='50px' height='50px' type='dots' />
        </div>
      ) : (
        <>
          <section className='w-full'>
            <article className='relative pb-32'>
              <div className='relative z-30 items-center p-6 mx-auto 2xl:container 2xl:mx-auto lg:p-0 lg:flex'>
                <div className='relative 2xl:mx-auto lg:w-3/4'>
                  <div className='absolute w-1/3 h-full md:w-2/12 bg-ea-amarillo' />
                  <h1 className='relative pt-20 pb-12 pl-12 w-full text-5xl font-medium md:w-3/4 xl:w-3/5 text-balance display-font lg:text-8xl text-ea-verde-900 fadeInLeft'>
                    {content?.sectionHero?.title}
                  </h1>
                  <p className='absolute right-0 -bottom-8 z-20 w-3/4 text-xs font-medium text-ea-verde-900 lg:-right-48 md:w-1/2 lg:w-1/3 lg:text-lg fadeIn'>
                    {content?.sectionHero?.subtitle}
                  </p>
                </div>
              </div>
              <div className='hidden absolute right-0 -bottom-4 lg:block text-ea-verde-oscuro-300'>
                <DecorativeBar />
              </div>
              <div className='absolute -bottom-28 z-10 mx-auto w-full text-gray-50 md:-bottom-48 lg:hidden'>
                <CircleWhite />
              </div>
            </article>
          </section>

          <section className='px-6 w-full bg-ea-verde-oscuro-500'>
            <article className='gap-6 items-center py-32 mx-auto 2xl:container lg:flex'>
              <ContentBlockImage
                brandLogoColor='text-ea-verde'
                title={content?.section1?.title}
                titleClass='font-medium text-ea-amarillo display-font w-11/12 text-balance md:text-pretty'
                subtitle={content?.section1?.subtitle}
                subtitleClass='display-font font-medium text-white text-2xl md:text-3xl'
                btnLabel={t('lets_talk')}
                btnClass='btn btn-primary'
                rtl={false}
                onClick={handleToggleModal}
                content={content?.section1?.description}
                contentClass='text-white w-3/4 text-base font-light text-pretty'
              >
                <div className='hidden ml-auto w-11/12 lg:block'>
                  <CircleWhite />
                </div>
              </ContentBlockImage>
            </article>
          </section>

          <section className="w-full px-6 bg-[url('/thinWaveBar.png')] 2xl:bg-[url('/waveBar.png')] bg-contain bg-no-repeat bg-right-top md:bg-left-top">
            <article className='overflow-hidden py-16 lg:py-32 2xl:container 2xl:mx-auto'>
              <div className='mx-auto w-full md:w-11/12 lg:p-0 lg:pl-6 3xl:pl-0'>
                <div className='mr-auto w-5/6 lg:w-full 2xl:w-4/5 lg:mx-auto'>
                  <div>
                    <h1 className='mb-2 text-5xl font-medium md:mb-6 lg:text-6xl display-font text-ea-verde-900'>
                      {t('homepage_services_section_title')}
                    </h1>
                    <Link href='/services' className='btn btn-secondary'>
                      {t('more_services')}
                    </Link>
                  </div>
                  <div className='gap-12 my-10 xl:flex'>
                    {content?.services?.map((service: any) => (
                      <div className='mb-8 w-full xl:mb-0' key={service.title}>
                        <ServicesCard
                          service={service}
                          containerClass='pb-16 lg:pb-8'
                          buttonText='learn_more'
                          onClick={() => toggleModal()}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </section>

          <section className='overflow-hidden py-14 w-full bg-gray-50 lg:py-20'>
            <article className='container px-4 mx-auto max-w-screen-xl'>
              <h1 className='text-2xl font-medium text-center lg:mb-10 display-font lg:text-4xl text-ea-verde-900'>
                {t('homepage_trust_section_title')}
              </h1>

              <div id='slider1' className='block overflow-visible my-16 lg:hidden'>
                <Slider className='items-center' {...clientsSettings}>
                  {content.trustedClients.map((item: any) => (
                    <div key={item.id}>
                      <Image
                        src={item.url}
                        alt='Logo client'
                        width={260}
                        height={120}
                        priority
                        style={{
                          width: '75%',
                          height: 'auto',
                          maxHeight: '120px',
                          maxWidth: '260px',
                          objectFit: 'contain',
                        }}
                        className='m-auto'
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className='flex gap-4 justify-center mt-4 lg:hidden'>
                <SliderArrow sliderId='slider1' />
              </div>

              <ul className='hidden flex-wrap justify-center items-center w-full lg:flex'>
                {content?.trustedClients?.map((item: any) => (
                  <li className='p-12 w-1/2 lg:w-3/12' key={item.id}>
                    <Image
                      src={item.url}
                      alt='Logo client'
                      width={300}
                      height={120}
                      priority
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '120px',
                        objectFit: 'contain',
                      }}
                    />
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section className='relative px-6 w-full xl:flex xl:px-0'>
            <div className='hidden xl:block'>
              <Image src='/testWave.png' alt='wave' width={240} height={1100} />
            </div>
            <article className='container overflow-hidden py-16 mx-auto my-auto'>
              <h1 className='text-4xl font-medium display-font md:text-6xl text-ea-verde-900 lg:py-4'>
                {(() => {
                  const words = t('homepage_testimonials_section_title').split(' ');
                  return (
                    <>
                      {words.slice(0, 2).join(' ')} <br /> {words.slice(2).join(' ')}
                    </>
                  );
                })()}
              </h1>
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
          </section>

          <section className='overflow-hidden px-6 w-full md:px-0 bg-ea-verde-oscuro-500'>
            <article className="md:bg-[url('/tabletWave.png')] 2xl:bg-[url('/desktopWave.png')] bg-contain bg-no-repeat bg-bottom md:bg-right-top relative items-center py-20 md:py-44 mx-auto 2xl:container md:flex md:pl-12">
              <ContentBlockImage
                title={content?.section2?.title}
                titleClass='text-white font-medium'
                subtitle={content?.section2?.subtitle}
                subtitleClass='text-ea-amarillo font-medium text-2xl md:text-4xl'
                content={content?.section2?.description}
                contentClass='text-white text-base lg:text-3xl font-light'
                btnLabel={t('wanna_know_more')}
                btnClass='btn btn-outline'
                onClick={handleToggleModal}
                rtl
              />
            </article>
          </section>

          <section className='px-6 w-full bg-gray-100'>
            <article className='py-12 mx-auto w-11/12 2xl:container lg:py-32 2xl:w-3/4'>
              <h1 className='mb-12 text-4xl font-medium lg:mb-24 lg:text-6xl display-font text-ea-verde-900'>
                {t('homepage_projects_section_title')}
              </h1>
              {content?.projects?.length > 0 && (
                <div>
                  {content?.projects?.map((project: any) => (
                    <div key={project.title}>
                      <div className=''>
                        {project?.videoId && <VideoIframe videoId={project?.videoId} muted />}
                      </div>
                      <div className='flex-row-reverse justify-between mb-10 lg:flex md:mb-20'>
                        <p className='mt-4 text-xs text-right md:w-5/12 text-balance lg:text-lg font-regular text-ea-verde-oscuro-500'>
                          {project.description}
                        </p>
                        <h2 className='mt-4 text-xl font-light lg:mt-8 lg:text-3xl text-ea-verde-oscuro-500'>
                          {project.title}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </article>
          </section>

          <section className='px-6 w-full bg-ea-verde-900'>
            <article className='overflow-hidden gap-8 items-center py-16 lg:flex lg:py-32 2xl:container 2xl:mx-auto'>
              <ContentBlockImage
                title={content?.section3?.title}
                subtitle={content?.section3?.subtitle}
                subtitleClass='text-ea-amarillo-200 text-2xl md:text-4xl font-regular md:font-medium'
                content={content?.section3?.description}
                titleClass='text-white font-medium'
                contentClass='text-white text-base md:text-3xl font-light'
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
          </section>
        </>
      )}
      <Modal size='xxl' bgColor='bg-ea-verde-200' noPadding />
    </Layout>
  );
};

export default Home;
