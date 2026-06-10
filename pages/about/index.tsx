import type { GetStaticPropsContext } from 'next';
import Layout from '@/components/Templates/Layout';
import { loadMessages } from '@/utils/i18n/getMessages';

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    messages: await loadMessages(locale),
  },
});

const About = () => (
  <Layout
    title='Servicios'
    description='Nos encargamos de cobrar las facturas pendientes a las empresas, para que solo te concentres en tu negocio.'
  >
    <p>En Sobre nosotros</p>
  </Layout>
);

export default About;
