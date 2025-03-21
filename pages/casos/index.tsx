import Layout from '@/components/Templates/Layout';
import useTranslation from 'next-translate/useTranslation';
import ProjectGrid from '@/components/Molecules/ProjectGrid';

const Services = () => {
  const { t } = useTranslation('common');

  const projects = [
    {
      title: 'Fundación Amparo y Justicia',
      description:
        'Web de fundación, Blog de noticias, Web campaña No Me Pregunten Más, Biblioteca de recursos online.',
      image: '/amparo-justicia.png',
    },
    {
      title: 'Menos Pausa Life',
      description:
        'Identidad de marca, Merchandising, Grilla de diseño para web, Diseño de sitio web',
      image: '/amparo-justicia.png',
    },
    {
      title: 'CFC Capital',
      description:
        'Campañas Digitales, Newsletter, Grilla de contenido, Negocio corporativo, Mantención sitio web.',
      image: '/amparo-justicia.png',
    },
    {
      title: 'Proyecto Horizontal 2',
      description:
        'Otro proyecto horizontal con descripción extendida para mostrar el layout.',
      image: '/amparo-justicia.png',
    },
    {
      title: 'Proyecto Vertical 3',
      description: 'Descripción del proyecto vertical número 3.',
      image: '/amparo-justicia.png',
    },
    {
      title: 'Proyecto Vertical 4',
      description: 'Descripción del proyecto vertical número 4.',
      image: '/amparo-justicia.png',
    },
  ];

  return (
    <Layout
      title="Casos"
      description="Clientes que han confiado en nosotros para dar vida a sus proyectos"
    >
      <section className="w-full px-4">
        <article className="container block py-24 mx-auto lg:flex">
          <h1 className="w-11/12 py-24 text-5xl uppercase lg:w-3/4 display-font lg:text-8xl text-verde-oscuro-500 fadeInLeft">
            {t('cases_title')}
          </h1>
        </article>
      </section>

      <section className="w-full px-4">
        <article className="container py-12 mx-auto">
          <ProjectGrid items={projects} />
        </article>
      </section>
    </Layout>
  );
};

export default Services;
