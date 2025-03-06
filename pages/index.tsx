import { useState } from 'react';
// import { FaEnvelope, FaDownload } from 'react-icons/fa';
import { InferGetStaticPropsType } from 'next';
import useTranslation from 'next-translate/useTranslation';
import CircleWhite from '@/components/Atoms/Svg/CircleWhite';
import Layout from '@/components/Templates/Layout';
import Modal from '@/components/Templates/Modal';
import FormContact from '@/components/Molecules/Forms/FormContact';
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
import { services } from '../utils/constants/index';

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
          <section className="w-full px-4 mb-12">
            <article className="container items-center block py-12 mx-auto lg:flex">
              <div className="relative mb-8 lg:w-3/4 lg:mb-0">
                <div className="absolute w-1/4 h-full bg-ea-amarillo" />

                <h1 className="relative w-11/12 py-24 mx-auto text-5xl uppercase lg:w-3/4 display-font lg:text-8xl text-ea-verde-oscuro fadeInLeft">
                  {t('hero_title')}
                </h1>
              </div>
              <div className="lg:w-1/2">
                <video
                  className="w-full mb-8 bg-white border-2 border-white aspect-video"
                  src=""
                  autoPlay
                  loop
                  muted
                >
                  Tu navegador no soporta el elemento de video.
                </video>
                <p className="w-3/4 text-lg font-medium fadeIn">
                  {t('hero_parragraph')}
                </p>
              </div>
            </article>
          </section>

          <section className="w-full px-4 bg-ea-verde-oscuro ">
            <ContentBlockImage
              brandLogoColor="text-ea-verde"
              title={t('homepage_content_section_title-1')}
              titleClass="text-ea-amarillo display-font"
              subtitle={t('homepage_content_section_subtitle-1')}
              subtitleClass="display-font text-white text-3xl"
              btnLabel={t('lets_talk')}
              btnClass="text-ea-amarillo border-ea-amarillo"
              rtl={false}
              onClick={() => setShowModal(true)}
              content={t('homepage_content_section_parragraph-1')}
              contentClass="text-white"
            >
              <CircleWhite />
            </ContentBlockImage>
          </section>

          <section className="w-full px-4 bg-gray-200">
            <article className="container py-24 mx-auto">
              <h1 className="mb-10 text-5xl display-font lg:text-4xl text-ea-verde-oscuro">
                {t('homepage_services_section_title')}
              </h1>
              <div className="justify-between mt-12 lg:flex">
                {services.map((service) => (
                  <ServicesCard
                    title={service.title}
                    services={service.parragraph}
                    key={service.title}
                  />
                ))}
              </div>
              <Link
                href="/servicios"
                className="mt-6 text-xs btn btn-secondary lg:text-base text-ea-verde border-ea-verde me-4"
              >
                {t('more_services')}
              </Link>
            </article>
          </section>

          <section className="w-full px-4 ">
            <article className="container py-24 mx-auto">
              <h1 className="mb-10 text-5xl display-font lg:text-4xl text-ea-verde-oscuro">
                {t('homepage_trust_section_title')}
              </h1>
              <div className="grid items-center grid-cols-2 gap-8 py-12 lg:grid-cols-4">
                {imagesLogos.map((item, index) => (
                  <Image
                    key={item.path}
                    src={item.path}
                    alt={`Logo ${index}`}
                    className="object-contain h-16 mx-auto mb-4 max-w-40"
                    width={150}
                    height={64}
                  />
                ))}
              </div>
            </article>
          </section>

          <section className="w-full px-4 mb-12">
            <article className="container py-12 mx-auto lg:flex">
              <div className="mb-8 lg:w-1/2 lg:mb-0">
                <h1 className="w-11/12 text-5xl font-semibold text-right lg:w-2/3 display-font md:text-6xl text-ea-verde-oscuro lg:py-24">
                  {t('homepage_testimonials_section_title')}
                </h1>
              </div>
              <Testimonials testimonials={content.testimonials} />
            </article>
          </section>

          <section className="relative w-full px-4 overflow-hidden bg-ea-verde-oscuro">
            <ContentBlockImage
              brandLogoColor="text-ea-verde"
              title={t('homepage_content_section_title-2')}
              titleClass="text-white"
              subtitle={t('homepage_content_section_subtitle-2')}
              subtitleClass="text-ea-amarillo text-3xl"
              content={t('homepage_content_section_parragraph-2')}
              contentClass="text-white"
              btnLabel={t('wanna_know_more')}
              btnClass="text-ea-amarillo border-ea-amarillo"
              onClick={() => setShowModal(true)}
              rtl
            >
              <div className="absolute top-0 right-0 hidden text-white lg:block">
                <Image
                  src="/green_curves.png"
                  alt="curvas verdes"
                  width={600}
                  height={1000}
                />
              </div>
            </ContentBlockImage>
          </section>

          <section className="w-full px-4 bg-gray-100">
            <article className="container py-12 mx-auto">
              <h1 className="mb-10 text-5xl display-font lg:text-4xl text-ea-verde-oscuro">
                {t('homepage_projects_section_title')}
              </h1>
              <div className="max-w-2xl mb-4 space-y-2 text-ea-verde-oscuro">
                <h2 className="text-2xl lg:text-2xl">
                  {content.projects[0].title}
                </h2>
                <p className="w-3/4 text-sm text-gray-600">
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

          <section className="w-full px-4 bg-ea-verde-900">
            <ContentBlockImage
              title={t('homepage_content_section_title-3')}
              titleClass="text-white"
              subtitle={t('homepage_content_section_subtitle-3')}
              subtitleClass="text-ea-amarillo text-3xl"
              content={t('homepage_content_section_parragraph-3')}
              contentClass="text-white"
              btnLabel={t('homepage_contact_us')}
              btnClass="text-ea-amarillo border-ea-amarillo"
              onClick={() => setShowModal(true)}
              rtl={false}
            >
              <GeometricShape />
            </ContentBlockImage>
          </section>

          <section className="relative w-full px-4 overflow-hidden bg-ea-verde-400">
            <ContentBlockImage
              brandLogoColor="text-ea-amarillo"
              title={t('homepage_talkUs_form_title')}
              titleClass="text-ea-verde-300"
              subtitle={t('homepage_talkUs_form_subtitle')}
              subtitleClass="text-white text-3xl"
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
              <div className="absolute top-0 left-0 hidden w-2/5 h-full bg-ea-verde-300 text-ea-verde-400 lg:block">
                <CircleCurves />
              </div>
            </ContentBlockImage>
          </section>

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
                  <h1 className="max-w-sm text-4xl display-font text-ea-verde-oscuro">
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
                      className="px-4 py-2 text-ea-verde-oscuro btn btn-secondary"
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
            size="md"
            onClick={() => setShowModal(false)}
            noPadding
          >
            <FormContact
              service="Contacto"
              title="Escríbenos"
              image="/images/contact.png"
              content="Nos pondremos en contacto contigo lo antes posible"
            />
          </Modal>
        </>
      )}
    </Layout>
  );
};

export default Home;
