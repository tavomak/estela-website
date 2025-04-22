import ContentBlockImage from '@/components/Molecules/ContentBlockImage';
import FormContact from '@/components/Molecules/Forms/FormContact';

import Layout from '@/components/Templates/Layout';
import Modal from '@/components/Templates/Modal';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useState } from 'react';
import ServiceCard from '@/components/Molecules/ServiceCard';
import SquaresCircle from '@/components/Atoms/Svg/SquaresCircle';
import Link from 'next/link';
import CircleGreen from '../../components/Atoms/Svg/CircleGreen/CircleGreen';

export const Services = () => {
  const [showModal, setShowModal] = useState(false);

  const { t } = useTranslation('common');
  const DevServices = [
    'Sitio personalizado',
    'WordPress CMS',
    'E-Commerce',
    'E-learning',
    'Sitios inmobiliarios',
    'Plantilla de email marketing',
    'Soporte y mantenimiento de sitio',
    'Desempeño y seguridad',
  ];
  const services = [
    'Auditoria y estrategia web',
    'Website copywriting',
    'UX y content strategy',
    'UI, wireframing y prototipos',
    'Arquitectura de contenido web',
    'Estructura de contenido blog',
    'Mockups, guia de diseño y estilo',
  ];
  const ContentMarketing = [
    'Estrategia de contenido RRSS',
    'Landing Pages',
    'Email Marketing',
    'Estructura contenido blog',
    'SEO',
  ];
  const PaidMedia = ['SEM', 'Google Ads', 'Anuncios en RRSS', 'Analytics'];

  const DesarrolloImagen = [
    'Estrategia de Marca y contenido',
    'Manual de identidad',
    'Material POP y regalos corporativos',
    'Imagen de campañas',
  ];

  return (
    <Layout
      title="Servicios"
      description="Servicios de desarrollo y diseño web, marketing digital e identidad de marca"
    >
      <section className="w-full px-6 bg-ea-verde-400">
        <article className="items-center gap-6 py-32 mx-auto text-6xl 2xl:container lg:flex">
          <ContentBlockImage
            title={t('service_content_section_title-1')}
            titleClass="font-semibold text-ea-amarillo w-11/12 text-pretty"
            subtitle={t('service_content_section_subtitle-1')}
            subtitleClass="font-medium text-white text-base md:text-3xl w-11/12"
            content={t('service_content_section_parragraph-1')}
            contentClass="text-ea-verde-300 font-normal text-xs md:text-lg w-11/12 text-pretty"
            rtl={false}
          >
            <div className="hidden w-11/12 ml-auto lg:block">
              <SquaresCircle />
            </div>
          </ContentBlockImage>
        </article>
      </section>

      <section className="w-full bg-gray-100">
        <article className="relative px-6 lg:py-32 2xl:container 2xl:mx-auto">
          <div className="w-11/12 mr-auto md:mx-auto">
            <div className="w-full gap-12 mx-auto my-10 xl:w-3/4 2xl:w-full 2xl:flex">
              <div className="w-full gap-8 my-auto 2xl:w-1/2 sm:flex 2xl:block">
                <div className="w-full lg:w-3/4">
                  <h1 className="text-4xl font-semibold text-balance display-font md:text-6xl text-ea-verde-900">
                    Desarrollo & Diseño web
                  </h1>
                  <Link
                    href="/servicios"
                    className="hidden mt-4 text-sm font-medium uppercase border-2 w-fit sm:block 2xl:hidden btn btn-secondary text-ea-verde-900 border-ea-verde-900"
                  >
                    {t('more_services')}
                  </Link>
                </div>
                <div>
                  <p className="text-base font-medium 2xl:mt-4 text-pretty md:text-3xl text-ea-verde-900">
                    Llevamos tu sitio web a otro nivel. Nos enfocamos en la
                    experiencia de usuario, un diseño consistente y un contenido
                    claro, conciso y atractivo.
                  </p>
                </div>
                <Link
                  href="/servicios"
                  className="mt-4 text-xs font-medium uppercase border-2 2xl:mt-8 md:text-sm sm:hidden 2xl:block btn btn-secondary text-ea-verde-900 border-ea-verde-900 w-fit"
                >
                  {t('more_services')}
                </Link>
              </div>
              <div className="justify-center gap-12 my-10 space-y-8 lg:space-y-0 lg:flex">
                <ServiceCard
                  title="Desarrollo web"
                  description={DevServices}
                  bgColor="#99E4D3"
                  accentColor="#00BC92"
                />
                <ServiceCard
                  title="Diseño web"
                  description={services}
                  bgColor="#F7FFBF"
                  accentColor="#B5BF6F"
                />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="w-full">
        <article className="container relative px-4 py-32 mx-auto">
          <div className="p-6 lg:p-0">
            <div className="gap-12 my-10 lg:flex">
              <Image
                src="/Square4Col.png"
                width={580}
                height={520}
                alt="Square4Col"
                className="object-contain aspect-square"
              />
              <div className="w-full lg:w-1/2">
                <h1 className="mb-6 text-5xl font-semibold display-font lg:text-6xl text-verde-oscuro-500">
                  Estructuramos y planificamos estrategias
                </h1>
                <p className="text-3xl text-verde-oscuro-500">
                  Desarrollamos una estrategia comunicacional consistente con un
                  plan de contenidos y una guía de diseño integradas para toda
                  la comunicación digital.
                </p>
              </div>
              <div className="mx-auto lg:w-1/4 md:flex" />
              <ServiceCard
                title="Implementamos desarrollos digitales"
                description="Desarrollamos una estrategia comunicacional consistente con un plan de contenidos y una guía de diseño integradas para toda la comunicación digital."
                bgColor="#ECEDEE"
                accentColor="#AAACAE"
              />
            </div>
          </div>
          <Image
            src="/green-bar.png"
            alt="Barra verde"
            width={829}
            height={67}
            className="absolute left-0 z-10 w-full -bottom-5 lg:w-96"
          />
        </article>
      </section>

      <section className="w-full bg-gray-200">
        <article className="container relative px-4 py-32 mx-auto">
          <div className="p-6 lg:p-0">
            <div className="gap-12 my-10 lg:flex">
              <div className="w-full lg:w-1/2">
                <h1 className="mb-6 text-5xl font-semibold display-font lg:text-6xl">
                  Marketing digital
                </h1>

                <p className="text-3xl text-verde-oscuro-500">
                  Planificamos, diseñamos, ejecutamos y analizamos campañas de
                  marketing desde una perspectiva 360.
                </p>
              </div>
              <div className="gap-12 my-10 lg:w-1/2 lg:flex">
                <ServiceCard
                  title="Content marketing"
                  description={ContentMarketing}
                  bgColor="#99E4D3"
                  accentColor="#00BC92"
                />
                <ServiceCard
                  title="Paid media"
                  description={PaidMedia}
                  bgColor="#F7FFBF"
                  accentColor="#B5BF6F"
                />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="relative w-full bg-gray-100">
        <article className="container px-4 py-32 mx-auto">
          <div className="p-6 lg:p-0">
            <div className="items-start gap-12 my-10 mr-auto lg:w-2/3 lg:flex">
              <div className="w-full mr-auto lg:w-3/4">
                <h1 className="mb-6 text-5xl font-semibold display-font lg:text-6xl">
                  Identidad de marca
                </h1>

                <p className="text-3xl">
                  Le damos un sentido estratégico al branding de tu empresa.
                  <p className="mt-4">
                    Creamos la imagen para tu empresa o te ayudamos a
                    refrescarla y a darle un uso consistente en tu comunicación.
                  </p>
                </p>
              </div>
              <div className="mx-auto lg:w-2/5 md:flex">
                <ServiceCard
                  title="Desarrollo de imagen"
                  description={DesarrolloImagen}
                  bgColor="#ECEDEE"
                  accentColor="#AAACAE"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 z-10 hidden md:block xl:hidden ">
            <Image
              src="/SunLines.png"
              height={400}
              width={660}
              alt="Sun Lines"
            />
          </div>
        </article>
      </section>

      <section className="w-full px-4 overflow-hidden bg-ea-verde-400">
        <article className="container relative items-center justify-between py-32 mx-auto lg:flex">
          <ContentBlockImage
            title="Planes de mantención"
            titleClass="text-ea-verde-500"
            subtitle="Continuamos permanentemente evaluando y proponiendo mejoras en la presencia digital."
            subtitleClass="text-white text-3xl"
            content="Por un fee mensual, nos convertimos en aliados comunicacionales de tu empresa. Participando proactivamente en los procesos de estructuración y planificación del contenido, análisis, rediseños y generación de elementos gráficos para mantener con vitalidad tu presencia digital."
            contentClass="text-ea-verde-500"
            btnLabel="Quiero saber más"
            btnClass="text-ea-amarillo border-ea-amarillo"
            onClick={() => setShowModal(true)}
            rtl={false}
          >
            <div className="absolute top-0 hidden lg:block -left-80 2xl:-left-10 text-ea-verde-500">
              <CircleGreen />
            </div>
          </ContentBlockImage>
        </article>
      </section>

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
    </Layout>
  );
};

export default Services;
