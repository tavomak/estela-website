import ContentBlockImage from '@/components/Molecules/ContentBlockImage';
import FormContact from '@/components/Molecules/Forms/FormContact';

import Layout from '@/components/Templates/Layout';
import Modal from '@/components/Templates/Modal';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useState } from 'react';
import CircleWhite from '@/components/Atoms/Svg/CircleWhite';
import ServiceCard from '@/components/Molecules/ServiceCard';
import SquaresCircle from '@/components/Atoms/Svg/SquaresCircle';
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
      <section className="w-full px-4 overflow-hidden bg-ea-verde-400">
        <article className="container items-center justify-between py-32 mx-auto lg:flex">
          <ContentBlockImage
            title={t('service_content_section_title-1')}
            titleClass="text-ea-amarillo"
            subtitle={t('service_content_section_subtitle-1')}
            subtitleClass="text-white text-3xl"
            content={t('service_content_section_parragraph-1')}
            contentClass="text-ea-amarillo"
            rtl={false}
          >
            <SquaresCircle />
          </ContentBlockImage>
        </article>
      </section>

      <section className="w-full bg-gray-100">
        <article className="relative px-4 py-32 overflow-hidden 2xl:container 2xl:mx-auto">
          <div className="container p-6 mx-auto lg:p-0">
            <div className="gap-12 my-10 lg:flex">
              <div className="w-full lg:w-2/5">
                <h1 className="mb-6 text-5xl font-semibold text-balance display-font lg:text-6xl text-verde-oscuro-500">
                  Desarrollo & Diseño web
                </h1>
                <p className="text-3xl text-verde-oscuro-500">
                  Llevamos tu sitio web a otro nivel. Nos enfocamos en la
                  experiencia de usuario, un diseño consistente y un contenido
                  claro, conciso y atractivo.
                </p>
              </div>
              <div className="gap-12 my-10 lg:flex">
                <ServiceCard title="Desarrollo web" services={DevServices} />
                <ServiceCard title="Diseño web" services={services} />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="w-full bg-gray-200">
        <article className="container relative px-4 py-32 mx-auto">
          <div className="p-6 lg:p-0">
            <div className="flex-row-reverse gap-12 my-10 lg:flex">
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
              <div className="mx-auto lg:w-1/4 md:flex">
                <ServiceCard
                  bgWhite
                  title="Desarrollos digitales"
                  services="El sitio web, actualizamos y estructuramos los diseños y contenidos, ejecutamos las campañas e integramos todos los procesos."
                />
              </div>
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

      <section className="w-full bg-white">
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
                  services={ContentMarketing}
                />
                <ServiceCard title="Paid media" services={PaidMedia} />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="w-full bg-gray-100">
        <article className="container relative px-4 py-32 mx-auto">
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
                  bgWhite
                  title="Desarrollo de imagen"
                  services={DesarrolloImagen}
                />
              </div>
            </div>
          </div>
          <div className="absolute top-0 z-10 hidden w-1/2 -rotate-180 lg:block -right-80 text-verde-oscuro-200">
            <CircleWhite />
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
