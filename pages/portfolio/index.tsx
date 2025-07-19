import Layout from '@/components/Templates/Layout';
import useTranslation from 'next-translate/useTranslation';

const Services = () => {
  const { t } = useTranslation('common');

  return (
    <Layout
      title='Casos'
      description='Clientes que han confiado en nosotros para dar vida a sus proyectos'
    >
      <section className='w-full px-4'>
        <article className='container block py-24 mx-auto lg:flex'>
          <h1 className='w-11/12 py-24 text-5xl uppercase lg:w-3/4 display-font lg:text-8xl text-verde-oscuro-500 fadeInLeft'>
            {t('cases_title')}
          </h1>
        </article>
      </section>
    </Layout>
  );
};

export default Services;
