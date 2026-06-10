import type { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Layout from '@/components/Templates/Layout';
import { loadMessages } from '@/utils/i18n/getMessages';

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    messages: await loadMessages(locale),
  },
});

const Portfolio = () => {
  const t = useTranslations('common');

  return (
    <Layout
      title='Casos'
      description='Clientes que han confiado en nosotros para dar vida a sus proyectos'
    >
      <section className='w-full px-4'>
        <article className='container block py-24 mx-auto lg:flex'>
          <h1 className='w-11/12 py-24 text-5xl uppercase lg:w-3/4 display-font lg:text-8xl text-ea-verde-oscuro-500 fadeInLeft'>
            {t('cases_title')}
          </h1>
        </article>
      </section>
    </Layout>
  );
};

export default Portfolio;
