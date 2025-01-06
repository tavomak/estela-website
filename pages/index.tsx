import { MouseEvent, useState } from 'react';
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
import BrandLogoHorizontal from '@/components/Atoms/Svg/BrandLogoHorizontal';
import { ImagesLogos } from '@/utils';
import Image from 'next/image';
import AlternatingGrid from '@/components/Molecules/AlternatingGrid';
import GeometricShape from '@/components/Atoms/Svg/GeometricShape';
import Link from 'next/link';
import Testimonials from '@/components/Molecules/Testimonial';

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
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

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
            <article className="container py-12 mx-auto inline lg:flex">
              <div className="lg:w-1/2 relative mb-8 lg:mb-0">
                <div className="absolute bg-ea-amarillo w-1/4 h-full" />

                <h1 className="relative w-11/12 lg:w-3/4 mx-auto display-font text-5xl lg:text-6xl uppercase font-semibold text-ea-verde-oscuro py-12 lg:py-24 fadeInLeft">
                  {t('hero_title')}
                </h1>
              </div>
              <div className="lg:w-1/2">
                <video
                  className="border-ea-verde-oscuro border-2 w-full aspect-video bg-gray-200 mb-8"
                  src=""
                  autoPlay
                  loop
                  muted
                >
                  Tu navegador no soporta el elemento de video.
                </video>
                <p className="font-medium text-2xl fadeIn">
                  {t('hero_parragraph')}
                </p>
              </div>
            </article>
          </section>

          <section className="w-full px-4 bg-ea-verde-oscuro">
            <article className="container py-12 mx-auto flex items-center justify-between">
              <div className="text-white md:w-1/2 lg:w-4/12">
                <CircleWhite />
              </div>
              <div className="md:w-1/2 space-y-6">
                <div className="text-ea-verde w-full max-w-56 mb-12">
                  <BrandLogoHorizontal />
                </div>
                <h1 className="display-font text-5xl lg:text-6xl text-balance font-semibold text-ea-amarillo">
                  {t('content_section_title-1')}
                </h1>
                <h2 className="font-medium text-2xl text-white">
                  {t('content_section_subtitle-1')}
                </h2>
                <p className="text-white text-4xl font-semibold display-font">
                  {t('content_section_parragraph-1')}
                </p>
                <aside className="pt-12 ">
                  <a
                    href="!#"
                    className="btn btn-secondary text-xs lg:text-base text-ea-amarillo border-ea-amarillo me-4"
                    onClick={(e) => handleClick(e)}
                  >
                    {t('lets_talk')}
                  </a>
                </aside>
              </div>
            </article>
          </section>

          <section className="w-full px-4 bg-gray-200">
            <article className="container py-12 mx-auto">
              <h1 className="display-font mb-10 text-center text-5xl lg:text-6xl font-semibold text-ea-verde-oscuro">
                {t('services_section_title')}
              </h1>
              <div className="space-y-8 lg:space-y-0 lg:flex gap-8 justify-between">
                <article className="w-11/12 lg:w-3/4 mx-auto">
                  <div className="border border-gray-200 bg-white group cursor-pointer">
                    <div className="bg-ea-amarillo p-6 transform transition-all duration-300 ease-in-out group-hover:-translate-x-4 group-hover:-translate-y-2">
                      <h2 className="display-font text-3xl font-bold">
                        {t('services_title_web')}
                      </h2>
                    </div>
                    <div className="p-6 border-t border-gray-200 min-h-40 lg:min-h-80 py-12">
                      <p className="text-xl text-ea-verde-oscuro leading-relaxed">
                        {t('services_parragraph_web')}
                      </p>
                    </div>
                  </div>
                </article>
                <article className="w-11/12 lg:w-3/4 mx-auto">
                  <div className="border border-gray-200 bg-white group cursor-pointer">
                    <div className="bg-ea-amarillo p-6 transform transition-all duration-300 ease-in-out group-hover:-translate-x-4 group-hover:-translate-y-2">
                      <h2 className="display-font text-3xl font-bold">
                        {t('services_title_marketing')}
                      </h2>
                    </div>
                    <div className="p-6 border-t border-gray-200 min-h-40 lg:min-h-80 py-12">
                      <p className="text-xl text-ea-verde-oscuro leading-relaxed">
                        {t('services_parragraph_marketing')}
                      </p>
                    </div>
                  </div>
                </article>
                <article className="w-11/12 lg:w-3/4 mx-auto">
                  <div className="border border-gray-200 bg-white group cursor-pointer">
                    <div className="bg-ea-amarillo p-6 transform transition-all duration-300 ease-in-out group-hover:-translate-x-4 group-hover:-translate-y-2">
                      <h2 className="display-font text-3xl font-bold">
                        {t('services_title_brand')}
                      </h2>
                    </div>
                    <div className="p-6 border-t border-gray-200 min-h-40 lg:min-h-80 py-12">
                      <p className="text-xl text-ea-verde-oscuro leading-relaxed">
                        {t('services_parragraph_brand')}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </article>
          </section>

          <section className="w-full px-4 bg-gray-100 mb-12">
            <article className="container py-12 mx-auto">
              <h1 className="display-font mb-10 text-center text-5xl lg:text-6xl font-semibold text-ea-verde-oscuro">
                {t('trust_section_title')}
              </h1>
              <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-8 py-12">
                {ImagesLogos.map((item, index) => (
                  <Image
                    key={item.path}
                    src={item.path}
                    alt={`Logo ${index}`}
                    className="mb-4 mx-auto"
                    width={200}
                    height={200}
                  />
                ))}
              </div>
            </article>
          </section>

          <section className="w-full px-4 mb-12">
            <article className="container mx-auto py-12 inline lg:flex">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h1 className="w-11/12 lg:w-3/4 lg:mx-auto display-font text-5xl md:text-6xl uppercase font-semibold text-ea-verde-oscuro lg:py-24">
                  {t('testimonials_section_title')}
                </h1>
              </div>
              <Testimonials testimonials={content.testimonials} />
            </article>
          </section>

          <section className="w-full px-4 relative overflow-hidden bg-ea-verde-oscuro">
            <article className="container py-12 mx-auto flex items-center justify-between">
              <div className="w-11/12 mx-auto lg:mx-0 lg:w-1/2 space-y-6">
                <div className="text-ea-verde w-full max-w-56 mb-12">
                  <BrandLogoHorizontal />
                </div>
                <h1 className="display-font text-5xl lg:text-6xl font-semibold text-white">
                  {t('content_section_title-2')}
                </h1>
                <h2 className="font-medium text-4xl text-ea-amarillo">
                  {t('content_section_subtitle-2')}
                </h2>
                <p className="text-white text-3xl">
                  {t('content_section_parragraph-2')}
                </p>
                <aside className="pt-12">
                  <a
                    href="!#"
                    className="btn btn-secondary text-xs lg:text-base uppercase text-ea-amarillo border-ea-amarillo me-4"
                    onClick={(e) => handleClick(e)}
                  >
                    {t('wanna_know_more')}
                  </a>
                </aside>
              </div>
              <div className="absolute right-0 text-white hidden lg:block">
                <Image
                  src="/green_curves.png"
                  alt="curvas verdes"
                  width={600}
                  height={1000}
                />
              </div>
            </article>
          </section>

          <section className="w-full px-4 bg-gray-100">
            <article className="container py-12 mx-auto">
              <h1 className="display-font mb-10 text-center text-5xl lg:text-6xl font-semibold text-ea-verde-oscuro">
                {t('projects_section_title')}
              </h1>
              <div className="max-w-2xl mb-4 text-ea-verde-oscuro space-y-2">
                <h2 className="text-2xl lg:text-4xl">
                  {content.projects[0].title}
                </h2>
                <p className="text-gray-600 text-base lg:text-2xl">
                  {content.projects[0].description}
                </p>
              </div>
              <div className="my-8 rounded-lg transition-all duration-300 hover:scale-95">
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
                <div className="text-center mt-8">
                  <Link
                    className="btn btn-secondary text-xs lg:text-base text-ea-verde border-ea-verde me-4"
                    href="/"
                  >
                    {t('more_projects')}
                  </Link>
                </div>
              )}
            </article>
          </section>

          <section className="w-full px-4 bg-ea-verde-900">
            <article className="container py-12 mx-auto lg:flex items-center justify-between">
              <div className="text-white mx-auto lg:mx-0 md:w-1/2 lg:w-4/12">
                <GeometricShape />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="text-ea-verde w-full max-w-56 mb-12">
                  <BrandLogoHorizontal />
                </div>
                <h1 className="display-font text-5xl lg:text-6xl text-balance font-semibold text-white">
                  {t('content_section_title-3')}
                </h1>
                <h2 className="font-medium text-4xl text-ea-amarillo">
                  {t('content_section_subtitle-3')}
                </h2>
                <p className="text-white text-3xl font-medium">
                  {t('content_section_parragraph-3')}
                </p>
                <aside className="pt-12 ">
                  <a
                    href="!#"
                    className="btn btn-secondary uppercase text-xs lg:text-base text-ea-amarillo border-ea-amarillo me-4"
                    onClick={(e) => handleClick(e)}
                  >
                    {t('contact_us')}
                  </a>
                </aside>
              </div>
            </article>
          </section>
          {/* 
          <section className="w-full px-4">
            <article className="container mx-auto py-12 last:flex items-center justify-between">
              <div className="md:w-1/2 lg:w-4/12 text-ea-verde">
                <CircleWhite />
              </div>
              <div className="md:w-1/2">
                <div className="">
                  <div className="text-ea-verde w-full max-w-56 mb-12">
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
                      className="text-ea-verde-oscuro px-4 py-2 btn btn-secondary"
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
