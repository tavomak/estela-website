import Image from 'next/image';
import CircleWhite from '@components/Atoms/Svg/CircleWhite';
import Layout from '@components/Templates/Layout';
import { FaEnvelope, FaDownload } from 'react-icons/fa';
import styles from '@styles/pages/Home.module.scss';

export default function Home() {
  return (
    <Layout
      description="Diseñamos y desarrollamos servicios que faciliten a personas mostrarse, comunicarse y crecer haciendo uso de la tecnología y los medios digitales especialmente web"
      title="Experiencias de usuario inteligentes"
      className="bg-secondary-color content-wrapper d-flex justify-content-center align-items-center"
    >
      <section className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 col-xl-4">
            <div className="wrapper">
              <CircleWhite />
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center text-md-start">
              <div className="mb-4">
                <Image
                  src="/logo-horizontal-EE.svg"
                  alt="Estela Estudio Digital"
                  width={250}
                  height={80}
                />
              </div>
              <h1 className={`text-complementary-color display-font ${styles.title}`}>
                Pronto estaremos de vuelta
                <br />
                {' '}
                con una versión mejorada
              </h1>
              <h2 className={`text-white display-font ${styles.subtitle}`}>¡Gracias por tu paciencia!</h2>
              <aside className="d-md-flex w-100 pt-5 ">
                <div className="mb-4">
                  <a href="mailto:contacto@estelaestudio.com" className="btn btn-primary me-4">
                    <FaEnvelope className="me-2" />
                    Escríbenos
                  </a>
                </div>
                <div className="mb-4">
                  <a href="/credenciales_2024.pdf" className="btn btn-secondary" target="_blank" rel="noreferrer">
                    <FaDownload className="me-2" />
                    Descargar credenciales
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
