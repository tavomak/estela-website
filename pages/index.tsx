import { MouseEvent, useState } from 'react';
import { FaEnvelope, FaDownload } from 'react-icons/fa';
import { InferGetStaticPropsType } from 'next';
import useTranslation from 'next-translate/useTranslation';
import CircleWhite from '@/components/Atoms/Svg/CircleWhite';
import Layout from '@/components/Templates/Layout';
import Modal from '@/components/Templates/Modal';
import FormContact from '@/components/Molecules/Forms/FormContact';
import { getPageBySlug } from '@/utils/lib/api';
import { useRouter } from 'next/router';
import Spinner from '@/components/Atoms/Spinner';
import BrandLogoHorizontal from '@/components/Atoms/Svg/BrandLogoHorizontal';

export async function getStaticProps(context: any) {
  const { locale } = context;
  const response = await getPageBySlug('home', [locale]);
  const data = response?.data || [];
  return {
    props: {
      data,
    },
    revalidate: 100,
  };
}

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
  const content = data?.page || [];
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
          <section className="container px-4 mx-auto">
            <div className="flex items-center justify-between">
              <div className="md:w-1/2 lg:w-4/12 text-ea-verde">
                <CircleWhite />
              </div>
              <div className="md:w-1/2">
                <div className="">
                  <div className="text-ea-verde w-full max-w-56 mb-12">
                    <BrandLogoHorizontal />
                  </div>
                  <h1 className="max-w-sm text-4xl display-font text-ea-verde-oscuro">
                    {content?.title}
                  </h1>
                  <h2 className="text-6xl text-ea-verde display-font">
                    {content?.subtitle}
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
            </div>
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
        </>
      )}
    </Layout>
  );
};

export default Home;
