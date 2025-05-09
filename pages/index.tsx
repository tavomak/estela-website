import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { getHomePageInfo } from '@/utils/lib/api';
import { imagesLogos } from '@/utils';
import { services, projects } from '@/utils/constants/index';
import { Testimonial } from '@/components/Molecules/Testimonial/types';
import useTranslation from 'next-translate/useTranslation';
import CircleWhite from '@/components/Atoms/Svg/CircleWhite';
import Layout from '@/components/Templates/Layout';
import Modal from '@/components/Templates/Modal';
import Spinner from '@/components/Atoms/Spinner';
import GeometricShape from '@/components/Atoms/Svg/GeometricShape';
import Testimonials from '@/components/Molecules/Testimonial';
import ContentBlockImage from '@/components/Molecules/ContentBlockImage';
import ServicesCard from '@/components/Molecules/ServiceCard';
import CircleCurves from '@/components/Atoms/Svg/CircleCurves';
import FormTalkUs from '@/components/Molecules/Forms/FormTalkUs';
import MobileGeometricShape from '@/components/Atoms/Svg/MobileGeometricShape';
import DecorativeBar from '@/components/Atoms/Svg/DecorativeBar';
import ArrowNext from '@/components/Atoms/Svg/ArrowNext';
import BrandLogoHorizontal from '@/components/Atoms/Svg/BrandLogoHorizontal';
// import { FaEnvelope, FaDownload } from 'react-icons/fa';

export async function getStaticProps(context: any) {
  const { locale } = context;
  const response = await getHomePageInfo('home', [locale]);
  const data = response?.data || [];
  return {
    props: {
      data,
    },
    revalidate: 100,
  };
}

/* interface homeInterface {
  id: string;
  contentSection1: {
    title: string;
    subtitle: string;
    description: string | null;
    id: string;
  };
  testimonials: {
    testimonialText: string;
    highlightedQuote: string | null;
    autorName: string;
    autorRole: string;
    projectName: string;
    image: { url: string };
  }[];
  projects: {
    title: string;
    description: string;
    image: { url: string };
  }[];
}
 */
export const Home = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { t } = useTranslation('common');

  const content = data?.homepage || [];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
    prevArrow: (
      <button type="button" aria-label="Previous">
        <span className="rotate-180">
          <ArrowNext />
        </span>
      </button>
    ),
    nextArrow: (
      <button type="button" aria-label="Next">
        <ArrowNext />
      </button>
    ),
  };

  const mobileButtons = (
    <div className="flex justify-center gap-16 mt-4 lg:hidden">
      <button
        type="button"
        className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:hidden text-verde-oscuro-200"
        aria-label="Previous"
        onClick={() =>
          (document.querySelector('.slick-prev') as HTMLElement)?.click()
        }
      >
        <span className="rotate-180">
          <ArrowNext />
        </span>
      </button>
      <button
        type="button"
        className="flex items-center justify-center w-10 h-10 rounded-full md:hidden bg-ea-verde-900 text-ea-amarillo"
        aria-label="Next"
        onClick={() =>
          (document.querySelector('.slick-next') as HTMLElement)?.click()
        }
      >
        <ArrowNext />
      </button>
    </div>
  );

  return (
    <Layout
      description="Diseñamos y desarrollamos servicios que faciliten a personas mostrarse, comunicarse y crecer haciendo uso de la tecnología y los medios digitales especialmente web"
      title="Experiencias de usuario inteligentes"
      className="items-center justify-center"
    >
      {router.isFallback ? (
        <div className="flex min-h-[calc(100vh-217px)] text-dark-blue justify-center items-center w-full">
          <Spinner width="50px" height="50px" type="dots" />
        </div>
      ) : (
        <>
          <section className="w-full">
            <article className="relative pb-32">
              <div className="relative z-30 items-center p-6 mx-auto 2xl:container 2xl:mx-auto lg:p-0 lg:flex">
                <div className="relative 2xl:mx-auto lg:w-3/4">
                  <div className="absolute w-1/3 h-full md:w-2/12 bg-ea-amarillo" />
                  <h1 className="relative w-11/12 pt-20 pb-12 pl-12 text-5xl font-medium md:w-3/5 display-font lg:text-8xl text-ea-verde-900 fadeInLeft">
                    {t('hero_title')}
                  </h1>
                  <p className="absolute right-0 z-20 w-3/4 text-xs font-medium text-ea-verde-900 lg:-right-48 md:w-1/2 lg:w-1/3 -bottom-8 lg:text-lg fadeIn">
                    {t('hero_parragraph')}
                  </p>
                </div>
              </div>
              <div className="absolute right-0 hidden -bottom-4 lg:block text-verde-oscuro-300">
                <DecorativeBar />
              </div>
              <div className="absolute z-10 w-full mx-auto -bottom-28 md:-bottom-48 lg:hidden text-gray-50">
                <CircleWhite />
              </div>
            </article>
          </section>

          <section className="w-full px-6 bg-verde-oscuro-500">
            <article className="items-center gap-6 py-32 mx-auto 2xl:container lg:flex">
              <ContentBlockImage
                brandLogoColor="text-ea-verde"
                title={t('homepage_content_section_title-1')}
                titleClass="font-medium text-ea-amarillo display-font w-11/12 text-balance md:text-pretty"
                subtitle={t('homepage_content_section_subtitle-1')}
                subtitleClass="display-font font-medium text-white text-2xl md:text-3xl"
                btnLabel={t('lets_talk')}
                btnClass="text-ea-amarillo border-ea-amarillo"
                rtl={false}
                onClick={() => setShowModal(true)}
                content={t('homepage_content_section_parragraph-1')}
                contentClass="text-white w-3/4 text-base font-light text-pretty"
              >
                <div className="hidden w-11/12 ml-auto lg:block">
                  <CircleWhite />
                </div>
              </ContentBlockImage>
            </article>
          </section>

          <section className="w-full px-6 bg-[url('/thinWaveBar.png')] 2xl:bg-[url('/waveBar.png')] bg-contain bg-no-repeat bg-right-top md:bg-left-top">
            <article className="py-16 overflow-hidden lg:py-32 2xl:container 2xl:mx-auto">
              <div className="w-full mx-auto md:w-11/12 lg:p-0">
                <div className="w-5/6 mr-auto lg:w-full 2xl:w-4/5 lg:mx-auto">
                  <div>
                    <h1 className="mb-2 text-5xl font-medium md:mb-6 lg:text-6xl display-font text-ea-verde-900">
                      {t('homepage_services_section_title')}
                    </h1>
                    <Link
                      href="/servicios"
                      className="text-sm font-medium uppercase border-2 btn btn-secondary text-ea-verde-900 border-ea-verde-900"
                    >
                      {t('more_services')}
                    </Link>
                  </div>
                  <div className="gap-12 my-10 lg:flex">
                    {services.map((service) => (
                      <div className="w-full mb-8 lg:mb-0" key={service.title}>
                        <ServicesCard
                          title={<p className="lg:w-4/5">{t(service.title)}</p>}
                          description={service.description}
                          bgColor={service.bgColor}
                          accentColor={service.accentColor}
                          textColor={service.textColor}
                          containerClass="pb-16 lg:pb-8"
                          buttonText="saber más"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </section>

          <section className="w-full py-20 bg-gray-50">
            <article className="container max-w-screen-xl px-4 mx-auto my-10">
              <h1 className="mb-10 text-5xl font-medium text-center display-font lg:text-4xl text-ea-verde-900">
                {t('homepage_trust_section_title')}
              </h1>
              <ul className="flex flex-col flex-wrap items-center justify-center w-full lg:flex-row">
                {imagesLogos.map((item) => (
                  <li className="w-1/2 p-12 lg:w-3/12" key={item.path}>
                    <Image
                      key={item.path}
                      src={item.path}
                      alt={`Logo ${item.path}`}
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

          <section className="relative w-full px-6 mb-12 overflow-hidden">
            <article className="container py-16 mx-auto">
              <h1 className="text-4xl font-medium display-font md:text-6xl text-ea-verde-900 lg:py-12">
                {(() => {
                  const words = t('homepage_testimonials_section_title').split(
                    ' '
                  );
                  return (
                    <>
                      {words.slice(0, 2).join(' ')} <br />{' '}
                      {words.slice(2).join(' ')}
                    </>
                  );
                })()}
              </h1>
              <div className="mt-8 overflow-hidden md:overflow-visible slider-container">
                <Slider {...sliderSettings}>
                  {content.testimonials.map((testimonial: Testimonial) => (
                    <div
                      key={testimonial.projectName}
                      className="w-11/12 mx-auto 2xl:ml-12 md:w-full"
                    >
                      <Testimonials {...testimonial} />
                    </div>
                  ))}
                </Slider>
                {mobileButtons}
              </div>
              <div className="absolute right-0 hidden -top-4 lg:block text-ea-verde-500">
                <DecorativeBar />
              </div>
            </article>
          </section>

          <section className="w-full px-6 overflow-hidden md:px-0 bg-verde-oscuro-500">
            <article className="md:bg-[url('/tabletWave.png')] 2xl:bg-[url('/desktopWave.png')] bg-contain bg-no-repeat bg-bottom md:bg-right-top relative items-center py-20 md:py-44 mx-auto 2xl:container md:flex md:pl-12">
              <ContentBlockImage
                title={t('homepage_content_section_title-2')}
                titleClass="text-white font-medium"
                subtitle={t('homepage_content_section_subtitle-2')}
                subtitleClass="text-ea-amarillo font-medium text-2xl md:text-4xl"
                content={t('homepage_content_section_parragraph-2')}
                contentClass="text-white text-base lg:text-3xl font-light"
                btnLabel={t('wanna_know_more')}
                btnClass="text-ea-amarillo border-ea-amarillo"
                onClick={() => setShowModal(true)}
                rtl
              />
            </article>
          </section>

          <section className="w-full px-6 bg-gray-100">
            <article className="w-11/12 py-12 mx-auto 2xl:container lg:py-32 2xl:w-3/4">
              <h1 className="mb-12 text-4xl font-medium lg:mb-24 lg:text-6xl display-font text-ea-verde-900">
                {t('homepage_projects_section_title')}
              </h1>
              {projects.length > 0 && (
                <div>
                  {projects.map((project) => (
                    <div key={project.title} className="mb-10 md:mb-20">
                      <div className="lg:h-[500px]">
                        <video
                          src={project.video}
                          className="w-full h-full md:object-cover"
                          autoPlay
                          loop
                          muted
                          controlsList="nodownload"
                          disablePictureInPicture
                        />
                      </div>

                      <div className="block mt-4">
                        <p className="text-sm md:text-lg font-regular text-verde-oscuro-500">
                          {project.description}
                        </p>
                        <h2 className="text-xl font-light lg:text-3xl text-verde-oscuro-500">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.title}
                          </a>
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-8">
                <Link
                  className="text-xs font-medium btn btn-secondary lg:text-sm text-ea-verde border-ea-verde me-4"
                  href="/"
                >
                  {t('more_projects')}
                </Link>
              </div>
            </article>
          </section>

          <section className="w-full px-6 bg-ea-verde-900">
            <article className="items-center gap-8 py-16 overflow-hidden lg:flex lg:py-32 2xl:container 2xl:mx-auto">
              <ContentBlockImage
                title={t('homepage_content_section_title-3')}
                titleClass="text-white font-medium"
                subtitle={t('homepage_content_section_subtitle-3')}
                subtitleClass="text-ea-amarillo-200 text-2xl md:text-4xl font-regular md:font-medium"
                content={t('homepage_content_section_parragraph-3')}
                contentClass="text-white text-base md:text-3xl font-light"
                btnLabel={t('homepage_contact_us')}
                btnClass="text-ea-amarillo border-ea-amarillo"
                onClick={() => setShowModal(true)}
                rtl={false}
              >
                <div className="w-11/12 mx-auto mt-8 lg:mt-0 lg:ml-auto">
                  <div className="hidden lg:block">
                    <GeometricShape />
                  </div>
                  <div className="flex justify-center lg:hidden">
                    <MobileGeometricShape />
                  </div>
                </div>
              </ContentBlockImage>
            </article>
          </section>

          {/*           <section className="relative w-full px-4 overflow-hidden bg-ea-verde-400">
            <article className="items-center py-16 overflow-hidden lg:flex lg:py-32 2xl:container 2xl:mx-auto">
              <ContentBlockImage
                title={t('homepage_talkUs_form_title')}
                titleClass="text-ea-verde-300"
                onClick={() => setShowModal(true)}
                rtl={false}
                content={
                  <FormTalkUs
                    service="Contactanos"
                    title="Conversemos"
                    image="/images/contact.png"
                    content="Nos pondremos en contacto contigo lo antes posible"
                  />
                }
              >
                <div className="absolute top-0 left-0 hidden bg-ea-verde-300 text-ea-verde-400 lg:block">
                  <CircleCurves />
                </div>
              </ContentBlockImage>
            </article>
          </section> */}

          {/* 
          <section className="w-full px-4">
            <article className="container items-center justify-between py-12 mx-auto last:flex">
              <div className="md:w-1/2 lg:w-4/12 text-ea-verde">
                <CircleWhite />
              </div>
              <div className="md:w-1/2">
                <div className="">
                  <div className="w-full mb-12 text-ea-verde max-w-56">
                    <BrandLogoHorizontal />
                  </div>
                  <h1 className="max-w-sm text-4xl display-font text-verde-oscuro-500">
                    {content?.contentSection1?.title}
                  </h1>
                  <h2 className="text-6xl text-ea-verde display-font">
                    {content?.contentSection1?.subtitle}
                  </h2>
                  <aside className="pt-12 d-md-flex w-100 ">
                    <a
                      href="!#"
                      className="px-4 py-2 btn btn-primary me-4"
                      onClick={(e) => handleClick(e)}
                    >
                      <FaEnvelope className="me-2" />
                      {t('nav_contact_title')}
                    </a>
                    <a
                      href="/credenciales_2024.pdf"
                      className="px-4 py-2 text-verde-oscuro-500 btn btn-secondary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaDownload className="me-2" />
                      {t('download_credentials')}
                    </a>
                  </aside>
                </div>
              </div>
            </article>
          </section> */}
          <Modal
            showModal={showModal}
            size="xxl"
            onClick={() => setShowModal(false)}
            bgColor="bg-ea-verde-200"
            noPadding
          >
            <div className="w-3/4 mx-auto lg:w-full md:flex">
              <div className="hidden lg:w-2/5 bg-ea-verde-900 text-ea-verde-200 lg:block">
                <CircleCurves />
              </div>
              <div className="w-full p-4 space-y-4 md:pt-12 lg:w-3/5">
                <div className="w-full space-y-8">
                  <div className="w-full max-w-56 text-ea-verde-900">
                    <BrandLogoHorizontal />
                  </div>
                  <h1 className="text-4xl font-semibold lg:text-6xl text-ea-verde-900">
                    {t('homepage_talkUs_form_title')}
                  </h1>
                  <h2 className="text-lg font-light lg:text-3xl text-ea-verde-900">
                    {t('homepage_content_section_subtitle-2')}
                  </h2>
                </div>

                <FormTalkUs
                  service="Contacto"
                  title="Escríbenos"
                  image="/images/contact.png"
                  content="Nos pondremos en contacto contigo lo antes posible"
                />
              </div>
            </div>
          </Modal>
        </>
      )}
    </Layout>
  );
};

export default Home;
