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
      description="Nos encargamos de cobrar las facturas pendientes a las empresas, para que solo te concentres en tu negocio."
    >
      <section className="w-full px-4 relative overflow-hidden bg-ea-verde-400">
        <ContentBlockImage
          title={t('service_content_section_title-1')}
          titleColor="text-ea-amarillo"
          subtitle={t('service_content_section_subtitle-1')}
          subtitleColor="text-white"
          content={t('service_content_section_parragraph-1')}
          contentColor="text-ea-amarillo"
          rtl={false}
        >
          <div className="absolute bottom-0 left-0 text-white hidden lg:block">
            <GreenWaves />
          </div>
        </ContentBlockImage>
      </section>

      <div className="relative">
        <section className="w-full px-4 overflow-hidden bg-gray-100">
          <article className="container pt-24 pb-36 mx-auto lg:flex items-center justify-between">
            <div className="text-ea-verde-oscuro mx-auto lg:mx-0 w-full lg:w-4/12 space-y-3">
              <h1 className="display-font text-5xl lg:text-6xl text-balance font-semibold">
                Desarrollo & Diseño web
              </h1>

              <div className="font-medium text-2xl">
                Llevamos tu sitio web a otro nivel. Nos enfocamos en la
                experiencia de usuario, un diseño consistente y un contenido
                claro, conciso y atractivo.
              </div>
            </div>
            <div className="w-full lg:w-1/2 md:flex gap-8 mt-10">
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
          className="absolute bottom-96 h-96 w-full z-10 hidden lg:block"
        />
        <section className="w-full px-4 overflow-hidden bg-gray-200">
          <article className="container pt-36 pb-24 mx-auto lg:flex items-center justify-between">
            <div className="text-ea-verde-oscuro mx-auto lg:mx-0 w-full lg:w-4/12 space-y-3 order-1">
              <h1 className="relative z-20 display-font text-5xl lg:text-6xl text-balance font-semibold">
                Estructuramos y planificamos estrategias
              </h1>

              <div className="font-medium text-2xl">
                Desarrollamos una estrategia comunicacional consistente con un
                plan de contenidos y una guía de diseño integradas para toda la
                comunicación digital.
              </div>
            </div>
            <div className="w-full lg:w-1/2 md:flex gap-8 mt-10">
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
          className="absolute -bottom-5 left-0 w-full lg:w-1/3 z-10"
        />
      </div>

      <section className="w-full px-4 overflow-hidden bg-white">
        <article className="container py-24 mx-auto lg:flex items-center justify-between">
          <div className="text-ea-verde-oscuro mx-auto lg:mx-0 w-full lg:w-4/12 space-y-3">
            <h1 className="display-font text-5xl lg:text-6xl text-balance font-semibold">
              Marketing digital
            </h1>

            <div className="font-medium text-2xl">
              Planificamos, diseñamos, ejecutamos y analizamos campañas de
              marketing desde una perspectiva 360.
            </div>
          </div>
          <div className="w-full lg:w-1/2 sm:flex gap-12 mt-10">
            <ServiceCardV3
              title="Content marketing"
              services={ContentMarketing}
            />
            <ServiceCardV3 title="Paid media" services={PaidMedia} />
          </div>
        </article>
      </section>

      <section className="relative w-full px-4 overflow-hidden bg-gray-100">
        <article className="container py-32 mx-auto lg:flex items-center justify-between">
          <div className="text-ea-verde-oscuro mx-auto lg:mx-0 w-full lg:w-4/12 space-y-3">
            <h1 className="display-font text-5xl lg:text-6xl text-balance font-semibold">
              Identidad de marca
            </h1>

            <div className="font-medium text-2xl">
              Le damos un sentido estratégico al branding de tu empresa.
              <br />
              Creamos la imagen para tu empresa o te ayudamos a refrescarla y a
              darle un uso consistente en tu comunicación.
            </div>
          </div>
          <div className="z-20 mx-auto w-11/12 lg:w-1/2 md:flex gap-8 mt-10">
            <ServiceCardV2
              title="Desarrollo de imagen"
              services={DesarrolloImagen}
            />
          </div>
          <div className="z-10 absolute -right-64 -rotate-180 w-1/2  text-gray-300">
            <CircleWhite />
          </div>
        </article>
      </section>

      <section className="w-full px-4 relative overflow-hidden bg-ea-verde-400">
        <ContentBlockImage
          title="Planes de mantención"
          titleColor="text-ea-verde-500"
          subtitle="Continuamos permanentemente evaluando y proponiendo mejoras en la presencia digital."
          content="Por un fee mensual, nos convertimos en aliados comunicacionales de tu empresa. Participando proactivamente en los procesos de estructuración y planificación del contenido, análisis, rediseños y generación de elementos gráficos para mantener con vitalidad tu presencia digital."
          btnLabel="Quiero saber más"
          onClick={() => setShowModal(true)}
          rtl={false}
        >
          <div className="absolute top-0 left-0 text-ea-verde-500 hidden lg:block">
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
