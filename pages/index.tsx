import { useState } from 'react';
// import { FaEnvelope, FaDownload } from 'react-icons/fa';
import { InferGetStaticPropsType } from 'next';
import useTranslation from 'next-translate/useTranslation';
import CircleWhite from '@/components/Atoms/Svg/CircleWhite';
import Layout from '@/components/Templates/Layout';
import Modal from '@/components/Templates/Modal';
import { getHomePageInfo } from '@/utils/lib/api';
import { useRouter } from 'next/router';
import Spinner from '@/components/Atoms/Spinner';
import { imagesLogos } from '@/utils';
import Image from 'next/image';
import AlternatingGrid from '@/components/Molecules/AlternatingGrid';
import GeometricShape from '@/components/Atoms/Svg/GeometricShape';
import Link from 'next/link';
import Testimonials from '@/components/Molecules/Testimonial';
import ContentBlockImage from '@/components/Molecules/ContentBlockImage';
import ServicesCard from '@/components/Molecules/ServiceCard';
import CircleCurves from '@/components/Atoms/Svg/CircleCurves';
import FormTalkUs from '@/components/Molecules/Forms/FormTalkUs';
import MobileGeometricShape from '@/components/Atoms/Svg/MobileGeometricShape';
import { services } from '../utils/constants/index';
import DecorativeBar from '../components/Atoms/Svg/DecorativeBar/DecorativeBar';

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
                  <h1 className="relative w-11/12 pt-20 pb-12 pl-12 text-5xl md:w-3/5 display-font lg:text-8xl text-ea-verde-900 fadeInLeft">
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
                titleClass="font-semibold text-ea-amarillo display-font w-11/12 text-balance md:text-pretty"
                subtitle={t('homepage_content_section_subtitle-1')}
                subtitleClass="display-font font-semibold text-white text-2xl md:text-3xl"
                btnLabel={t('lets_talk')}
                btnClass="text-ea-amarillo border-ea-amarillo"
                rtl={false}
                onClick={() => setShowModal(true)}
                content={t('homepage_content_section_parragraph-1')}
                contentClass="text-white w-3/4"
              >
                <div className="hidden w-11/12 ml-auto lg:block">
                  <CircleWhite />
                </div>
              </ContentBlockImage>
            </article>
          </section>

          <section className="w-full px-6 bg-[url('/thinWaveBar.png')] 2xl:bg-[url('/waveBar.png')] bg-contain bg-no-repeat bg-right-top md:bg-left-top">
            <article className="relative py-16 overflow-hidden lg:py-32 2xl:container 2xl:mx-auto">
              <div className="relative w-full mx-auto md:w-11/12 lg:p-0">
                <div className="w-5/6 mr-auto lg:w-11/12 lg:mx-auto">
                  <div>
                    <h1 className="mb-2 text-5xl md:mb-6 lg:text-6xl display-font text-ea-verde-900">
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
                          title={service.title}
                          description={service.description}
                          bgColor={service.bgColor}
                          accentColor={service.accentColor}
                          textColor={service.textColor}
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
              <h1 className="mb-10 text-5xl text-center display-font lg:text-4xl text-ea-verde-900">
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

          <section className="w-full px-6 mb-12">
            <article className="items-center py-16 overflow-hidden lg:flex lg:py-32 lg:container lg:mx-auto">
              <div className="mr-auto lg:w-1/3">
                <h1 className="w-11/12 text-4xl font-semibold text-left md:text-right display-font md:text-6xl text-ea-verde-900 lg:py-24">
                  {t('homepage_testimonials_section_title')}
                </h1>
              </div>
              <div>
                <Testimonials testimonials={content.testimonials} />
              </div>
            </article>
          </section>

          <section className="w-full px-6 overflow-hidden md:px-0 bg-verde-oscuro-500">
            <article className="md:bg-[url('/tabletWave.png')] xl:bg-[url('/desktopWave.png')] bg-contain bg-no-repeat bg-bottom md:bg-right-top relative items-center py-32 mx-auto 2xl:container md:flex ">
              <ContentBlockImage
                title={t('homepage_content_section_title-2')}
                titleClass="text-white text-right font-semibold"
                subtitle={t('homepage_content_section_subtitle-2')}
                subtitleClass="text-ea-amarillo font-bold text-2xl md:text-3xl text-right"
                content={t('homepage_content_section_parragraph-2')}
                contentClass="text-white text-right text-base font-medium"
                btnLabel={t('wanna_know_more')}
                btnClass="text-ea-amarillo border-ea-amarillo ml-auto mr-0"
                onClick={() => setShowModal(true)}
                rtl
              />
            </article>
          </section>

          <section className="w-full px-6 bg-gray-100">
            <article className="container py-12 mx-auto lg:w-3/5">
              <h1 className="mb-10 text-5xl display-font lg:text-4xl text-verde-oscuro-500">
                {t('homepage_projects_section_title')}
              </h1>
              <div className="max-w-2xl mb-4 space-y-2 text-verde-oscuro-500">
                <h2 className="text-2xl">{content.projects[0].title}</h2>
                <p className="w-3/4 text-sm text-ea-gris">
                  {content.projects[0].description}
                </p>
              </div>
              <div className="my-8 transition-all duration-300 rounded-lg">
                <Image
                  src={content.projects[0].image.url}
                  alt={`logo de ${content.projects[0].title}`}
                  width={1200}
                  height={600}
                  className="w-full"
                />
              </div>
              <AlternatingGrid projects={content.projects.slice(1, 5)} />
              {content.projects.length > 6 && (
                <div className="mt-8 text-center">
                  <Link
                    className="text-xs btn btn-secondary lg:text-base text-ea-verde border-ea-verde me-4"
                    href="/"
                  >
                    {t('more_projects')}
                  </Link>
                </div>
              )}
            </article>
          </section>

          <section className="w-full px-6 bg-ea-verde-900">
            <article className="items-center gap-8 py-16 overflow-hidden lg:flex lg:py-32 2xl:container 2xl:mx-auto">
              <ContentBlockImage
                title={t('homepage_content_section_title-3')}
                titleClass="text-white font-semibold"
                subtitle={t('homepage_content_section_subtitle-3')}
                subtitleClass="text-ea-amarillo text-2xl md:text-4xl font-bold md:font-medium"
                content={t('homepage_content_section_parragraph-3')}
                contentClass="text-white text-base md:text-3xl font-medium"
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
            size="xl"
            onClick={() => setShowModal(false)}
            bgColor="bg-ea-verde-400"
            noPadding
          >
            <div className="w-3/4 mx-auto md:w-full md:flex">
              <div className="hidden bg-ea-verde-300 text-ea-verde-400 lg:block">
                <CircleCurves />
              </div>
              <div className="p-4 pt-12">
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
