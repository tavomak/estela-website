import Link from 'next/link';
import Layout from '@/components/Templates/Layout';
import CircleWhite from '@/components/Atoms/Svg';
import BrandLogoHorizontal from '@/components/Atoms/Svg/BrandLogoHorizontal';

const FourOhFour = () => (
  <Layout title="Contenido no encontrado" description="Página no encontrada">
    <section className="w-full px-4 bg-gray-100">
      <article className="container items-center justify-between py-12 mx-auto last:flex">
        <div className="md:w-1/2 lg:w-4/12 text-ea-verde">
          <CircleWhite />
        </div>
        <div className="md:w-1/2">
          <div className="">
            <div className="w-full mb-12 text-ea-verde max-w-56">
              <BrandLogoHorizontal />
            </div>
            <h1 className="max-w-sm text-4xl display-font text-verde-oscuro-500">
              Opps... Página no encontrada
            </h1>
            <aside className="pt-12 d-md-flex w-100 ">
              <Link href="/" className="px-4 py-2 btn btn-primary me-4">
                Volver al sitio
              </Link>
            </aside>
          </div>
        </div>
      </article>
    </section>
  </Layout>
);

export default FourOhFour;
