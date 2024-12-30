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
import { ImagesLogos } from '@/utils';
import Image from 'next/image';
import AlternatingGrid from '@/components/Molecules/AlternatingGrid';
import GeometricShape from '@/components/Atoms/Svg/GeometricShape';
import ArrowNext from '../components/Atoms/Svg/ArrowNext/ArrowNext';

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
          <section className="container px-4 mx-auto mb-12">
            <article className="inline lg:flex">
              <div className="lg:w-1/2 relative mb-8 lg:mb-0">
                <div className="absolute bg-ea-amarillo w-1/4 h-full" />

                <h1 className="relative w-11/12 lg:w-3/4 mx-auto display-font text-5xl lg:text-6xl uppercase font-semibold text-ea-verde-oscuro py-12 lg:py-24 fadeInLeft">
                  Mejoramos tus procesos de comunicación digital
                </h1>
              </div>
              <div className="lg:w-1/2">
                <video
                  className="border-ea-verde-oscuro border-2 w-full aspect-video bg-gray-200 mb-8"
                  src=""
                  autoPlay
                  loop
                  muted
                >
                  Tu navegador no soporta el elemento de video.
                </video>
                <p className="font-medium text-2xl fadeIn">
                  Mediante el desarrollo de sitios web y aplicaciones, la
                  consolidación de la identidad de marca y la planificación de
                  campañas digitales
                </p>
              </div>
            </article>
          </section>

          <section className="w-full px-4 bg-ea-verde-oscuro">
            <article className="container py-12 mx-auto flex items-center justify-between">
              <div className="text-white md:w-1/2 lg:w-4/12">
                <CircleWhite />
              </div>
              <div className="md:w-1/2 space-y-6">
                <div className="text-ea-verde w-full max-w-56 mb-12">
                  <BrandLogoHorizontal />
                </div>
                <h1 className="display-font text-5xl lg:text-6xl text-balance font-semibold text-ea-amarillo">
                  Porque sabemos que tienes algo que decir
                </h1>
                <h2 className="font-medium text-2xl text-white">
                  Nos involucramos con la visión empresarial, el sentido de sus
                  productos y servicios y las oportunidades de negocio.
                </h2>
                <p className="text-white text-4xl font-semibold display-font">
                  Lleva tu visión al siguiente nivel
                </p>
                <aside className="pt-12 ">
                  <a
                    href="!#"
                    className="btn btn-secondary text-xs lg:text-base text-ea-amarillo border-ea-amarillo me-4"
                    onClick={(e) => handleClick(e)}
                  >
                    Hablemos
                  </a>
                </aside>
              </div>
            </article>
          </section>

          <section className="w-full px-4 bg-gray-200">
            <article className="container py-12 mx-auto">
              <h1 className="display-font mb-10 text-center text-5xl lg:text-6xl font-semibold text-ea-verde-oscuro">
                Conoce nuestros servicios
              </h1>
              <div className="space-y-8 lg:space-y-0 lg:flex gap-8 justify-between">
                <article className="w-11/12 lg:w-3/4 mx-auto">
                  <div className="border border-gray-200 bg-white group cursor-pointer">
                    <div className="bg-ea-amarillo p-6 transform transition-all duration-300 ease-in-out group-hover:-translate-x-4 group-hover:-translate-y-2">
                      <h2 className="display-font text-3xl font-bold">
                        Desarrollo & diseño web
                      </h2>
                    </div>
                    <div className="p-6 border-t border-gray-200 min-h-40 lg:min-h-80 py-12">
                      <p className="text-xl text-ea-verde-oscuro leading-relaxed">
                        Llevamos tu sitio web a otro nivel. Nos enfocamos en la
                        experiencia de usuario, un diseño consistente y la
                        estructuración de un contenido claro, conciso y
                        atractivo.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="w-11/12 lg:w-3/4 mx-auto">
                  <div className="border border-gray-200 bg-white group cursor-pointer">
                    <div className="bg-ea-amarillo p-6 transform transition-all duration-300 ease-in-out group-hover:-translate-x-4 group-hover:-translate-y-2">
                      <h2 className="display-font text-3xl font-bold">
                        Marketing digital
                      </h2>
                    </div>
                    <div className="p-6 border-t border-gray-200 min-h-40 lg:min-h-80 py-12">
                      <p className="text-xl text-ea-verde-oscuro leading-relaxed">
                        Planificamos, diseñamos, ejecutamos y analizamos
                        campañas de marketing de contenido desde una perspectiva
                        360.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="w-11/12 lg:w-3/4 mx-auto">
                  <div className="border border-gray-200 bg-white group cursor-pointer">
                    <div className="bg-ea-amarillo p-6 transform transition-all duration-300 ease-in-out group-hover:-translate-x-4 group-hover:-translate-y-2">
                      <h2 className="display-font text-3xl font-bold">
                        Identida de marca
                      </h2>
                    </div>
                    <div className="p-6 border-t border-gray-200 min-h-40 lg:min-h-80 py-12">
                      <p className="text-xl text-ea-verde-oscuro leading-relaxed">
                        Le damos un sentido estratégico al branding de tu
                        empresa. Creamos la imagen para tu empresa o te ayudamos
                        a refrescarla y a darle un uso consistente en tu
                        comunicación.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </article>
          </section>

          <section className="w-full px-4 bg-gray-100 mb-12">
            <article className="container py-12 mx-auto">
              <h1 className="display-font mb-10 text-center text-5xl lg:text-6xl font-semibold text-ea-verde-oscuro">
                Han confiado en nosotros
              </h1>
              <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-8 py-12">
                {ImagesLogos.map((item, index) => (
                  <Image
                    key={item.path}
                    src={item.path}
                    alt={`Logo ${index}`}
                    className="mb-4 mx-auto"
                    width={200}
                    height={200}
                  />
                ))}
              </div>
            </article>
          </section>

          <section className="container px-4 mx-auto mb-12">
            <article className="inline lg:flex">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h1 className="w-11/12 lg:w-3/4 mx-auto display-font text-5xl lg:text-6xl uppercase font-semibold text-ea-verde-oscuro py-12 lg:py-24">
                  Creamos vínculos duraderos
                </h1>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <p className="font-medium text-2xl fadeIn">
                  “Son profesionales que comprenden la importancia de que las
                  páginas web sean dinámicas y estén constantemente actualizadas
                  con nueva información.
                </p>
                <p className="font-semibold text-2xl">
                  Del trabajo con Estela destaco la excelente comunicación.
                  Están dispuestos a solucionar nuestras necesidades como
                  clientes”.
                </p>
                <div className="flex gap-4">
                  <div className=" rotate-180">
                    <ArrowNext />
                  </div>
                  <ArrowNext />
                </div>
                <div className="flex gap-6">
                  <Image
                    src="/logo-Amparo-Justicia.png"
                    width={60}
                    height={60}
                    alt="logo"
                  />
                  <span className="text-lg">
                    Paola Carmona
                    <p className="text-sm">
                      Encargada digital Fundación Amparo y Justicia
                    </p>
                  </span>
                </div>
              </div>
            </article>
          </section>

          <section className="relative overflow-hidden w-full px-4 py-20 bg-ea-verde-oscuro">
            <article className="container mx-auto flex items-center justify-between">
              <div className="w-11/12 mx-auto lg:mx-0 lg:w-1/2 space-y-6">
                <div className="text-ea-verde w-full max-w-56 mb-12">
                  <BrandLogoHorizontal />
                </div>
                <h1 className="display-font text-5xl lg:text-6xl font-semibold text-white">
                  ¿Tu comunicación se encuentra estancada en un pantano digital?
                </h1>
                <h2 className="font-medium text-4xl text-ea-amarillo">
                  Tenemos la experiencia, en la gestión y el desarrollo web para
                  ayudarte.
                </h2>
                <p className="text-white text-3xl">
                  La presencia digital requiere de una perspectiva estratégica
                  para crecer.
                </p>
                <aside className="pt-12 ">
                  <a
                    href="!#"
                    className="btn btn-secondary text-xs lg:text-base uppercase text-ea-amarillo border-ea-amarillo me-4"
                    onClick={(e) => handleClick(e)}
                  >
                    Quiero saber más
                  </a>
                </aside>
              </div>
              <div className="absolute right-0 text-white hidden lg:block">
                <Image
                  src="/green_curves.png"
                  alt="curvas verdes"
                  width={600}
                  height={1000}
                />
              </div>
            </article>
          </section>

          <section className="w-full px-4">
            <article className="container py-12 mx-auto">
              <h1 className="display-font mb-10 text-center text-5xl lg:text-6xl font-semibold text-ea-verde-oscuro">
                El trabajo que nos respalda
              </h1>
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold mb-3">Amparo y Justicia</h2>
                <p className="text-gray-600">
                  Web de fundación. • Blog de noticias. • Minisitio Campaña No
                  Me Pregunten Más. • Biblioteca de recursos online.
                </p>
              </div>
              <div className="w-full rounded-lg">
                <Image
                  src="/amparo-justicia.png"
                  alt="logo"
                  width={1200}
                  height={600}
                />
              </div>
              <AlternatingGrid />
            </article>
          </section>

          <section className="w-full px-4 py-24 bg-ea-verde-900">
            <article className="container mx-auto inline lg:flex items-center justify-between">
              <div className="text-white mx-auto lg:mx-0 md:w-1/2 lg:w-4/12">
                <GeometricShape />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="text-ea-verde w-full max-w-56 mb-12">
                  <BrandLogoHorizontal />
                </div>
                <h1 className="display-font text-5xl lg:text-6xl text-balance font-semibold text-white">
                  Planes de mantención
                </h1>
                <h2 className="font-medium text-4xl text-ea-amarillo">
                  Mantén tu presencia digital siempre activa y optimizada
                </h2>
                <p className="text-white text-3xl font-medium">
                  Nos convertimos en tus aliados estratégicos: evaluamos,
                  proponemos mejoras y creamos contenido visual y funcional para
                  garantizar una presencia online efectiva y actualizada.
                </p>
                <aside className="pt-12 ">
                  <a
                    href="!#"
                    className="btn btn-secondary uppercase text-xs lg:text-base text-ea-amarillo border-ea-amarillo me-4"
                    onClick={(e) => handleClick(e)}
                  >
                    Contáctanos
                  </a>
                </aside>
              </div>
            </article>
          </section>

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
