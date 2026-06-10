import type { GetStaticPaths, GetStaticPropsContext } from 'next';
import Layout from '@/components/Templates/Layout';
import { loadMessages } from '@/utils/i18n/getMessages';

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    messages: await loadMessages(locale),
  },
});

const PortfolioSlug = () => (
  <Layout
    title='Servicios'
    description='Nos encargamos de cobrar las facturas pendientes a las empresas, para que solo te concentres en tu negocio.'
  >
    <h1>Nuestro clientes</h1>
  </Layout>
);

export default PortfolioSlug;
