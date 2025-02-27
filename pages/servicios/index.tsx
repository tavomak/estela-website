import GreenWaves from '@/components/Atoms/Svg/GreenWaves';
import ContentBlockImage from '@/components/Molecules/ContentBlockImage';
import FormContact from '@/components/Molecules/Forms/FormContact';

import Layout from '@/components/Templates/Layout';
import Modal from '@/components/Templates/Modal';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useState } from 'react';
import CircleWhite from '@/components/Atoms/Svg/CircleWhite';
import ServiceCardV3 from '@/components/Molecules/ServiceCard-v3';
import ServiceCardV2 from '@/components/Molecules/ServiceCard-v2';
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
    'Mockups, gu a de diseño y estilo',
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
      <section className="relative w-full px-4 overflow-hidden bg-ea-verde-400">
        <ContentBlockImage
          title={t('service_content_section_title-1')}
          titleColor="text-ea-amarillo"
          subtitle={t('service_content_section_subtitle-1')}
          subtitleColor="text-white"
          content={t('service_content_section_parragraph-1')}
          contentColor="text-ea-amarillo"
          rtl={false}
        >
          <div className="absolute bottom-0 left-0 hidden text-white lg:block">
            <GreenWaves />
          </div>
        </ContentBlockImage>
      </section>

      <div className="relative">
        <section className="w-full px-4 overflow-hidden bg-gray-100">
          <article className="container items-center justify-between pt-24 mx-auto pb-36 lg:flex">
            <div className="w-full mx-auto space-y-3 text-ea-verde-oscuro lg:mx-0 lg:w-4/12">
              <h1 className="text-5xl font-semibold display-font lg:text-6xl text-balance">
                Desarrollo & Diseño web
              </h1>

              <div className="text-2xl font-medium">
                Llevamos tu sitio web a otro nivel. Nos enfocamos en la
                experiencia de usuario, un diseño consistente y un contenido
                claro, conciso y atractivo.
              </div>
            </div>
            <div className="w-full gap-8 mt-10 lg:w-1/2 md:flex">
              <ServiceCardV2 title="Desarrollo web" services={DevServices} />
              <ServiceCardV2 title="Diseño web" services={services} />
            </div>
          </article>
        </section>
        <Image
          src="/waves-gray.png"
          alt="Desarrollo web"
          width={1980}
          height={655}
          className="absolute z-10 hidden w-full bottom-96 h-96 lg:block"
        />
        <section className="w-full px-4 overflow-hidden bg-gray-200">
          <article className="container items-center justify-between pb-24 mx-auto pt-36 lg:flex">
            <div className="order-1 w-full mx-auto space-y-3 text-ea-verde-oscuro lg:mx-0 lg:w-4/12">
              <h1 className="relative z-20 text-5xl font-semibold display-font lg:text-6xl text-balance">
                Estructuramos y planificamos estrategias
              </h1>

              <div className="text-2xl font-medium">
                Desarrollamos una estrategia comunicacional consistente con un
                plan de contenidos y una guía de diseño integradas para toda la
                comunicación digital.
              </div>
            </div>
            <div className="w-full gap-8 mt-10 lg:w-1/2 md:flex">
              <ServiceCardV2
                title="Implementamos desarrollos digitales"
                services={DevServices}
              />
            </div>
          </article>
        </section>
        <Image
          src="/green-bar.png"
          alt="Barra verde"
          width={829}
          height={67}
          className="absolute left-0 z-10 w-full -bottom-5 lg:w-1/3"
        />
      </div>

      <section className="w-full px-4 overflow-hidden bg-white">
        <article className="container items-center justify-between py-24 mx-auto lg:flex">
          <div className="w-full mx-auto space-y-3 text-ea-verde-oscuro lg:mx-0 lg:w-4/12">
            <h1 className="text-5xl font-semibold display-font lg:text-6xl text-balance">
              Marketing digital
            </h1>

            <div className="text-2xl font-medium">
              Planificamos, diseñamos, ejecutamos y analizamos campañas de
              marketing desde una perspectiva 360.
            </div>
          </div>
          <div className="w-full gap-12 mt-10 lg:w-1/2 sm:flex">
            <ServiceCardV3
              title="Content marketing"
              services={ContentMarketing}
            />
            <ServiceCardV3 title="Paid media" services={PaidMedia} />
          </div>
        </article>
      </section>

      <section className="relative w-full px-4 overflow-hidden bg-gray-100">
        <article className="container items-center justify-between py-32 mx-auto lg:flex">
          <div className="w-full mx-auto space-y-3 text-ea-verde-oscuro lg:mx-0 lg:w-4/12">
            <h1 className="text-5xl font-semibold display-font lg:text-6xl text-balance">
              Identidad de marca
            </h1>

            <div className="text-2xl font-medium">
              Le damos un sentido estratégico al branding de tu empresa.
              <br />
              Creamos la imagen para tu empresa o te ayudamos a refrescarla y a
              darle un uso consistente en tu comunicación.
            </div>
          </div>
          <div className="z-20 w-11/12 gap-8 mx-auto mt-10 lg:w-1/2 md:flex">
            <ServiceCardV2
              title="Desarrollo de imagen"
              services={DesarrolloImagen}
            />
          </div>
          <div className="absolute z-10 w-1/2 text-gray-300 -rotate-180 -right-64">
            <CircleWhite />
          </div>
        </article>
      </section>

      <section className="relative w-full px-4 overflow-hidden bg-ea-verde-400">
        <ContentBlockImage
          title="Planes de mantención"
          titleColor="text-ea-verde-500"
          subtitle="Continuamos permanentemente evaluando y proponiendo mejoras en la presencia digital."
          content="Por un fee mensual, nos convertimos en aliados comunicacionales de tu empresa. Participando proactivamente en los procesos de estructuración y planificación del contenido, análisis, rediseños y generación de elementos gráficos para mantener con vitalidad tu presencia digital."
          btnLabel="Quiero saber más"
          onClick={() => setShowModal(true)}
          rtl={false}
        >
          <div className="absolute top-0 left-0 hidden text-ea-verde-500 lg:block">
            <CircleGreen />
          </div>
        </ContentBlockImage>
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
