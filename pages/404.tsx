import Link from 'next/link';
import Layout from '@/components/Templates/Layout';
import CircleWhite from '@/components/Atoms/Svg';
import BrandLogoHorizontal from '@/components/Atoms/Svg/BrandLogoHorizontal';
import useTranslation from 'next-translate/useTranslation';

const FourOhFour = () => {
  const { t } = useTranslation('common');
  return (
    <Layout title={t('404.title')} description={t('404.description')}>
      <section className='px-4 w-full bg-gray-100'>
        <article className='container justify-between items-center py-12 mx-auto last:flex'>
          <div className='md:w-1/2 lg:w-4/12 text-ea-verde'>
            <CircleWhite />
          </div>
          <div className='md:w-1/2'>
            <div className=''>
              <div className='mb-12 w-full text-ea-verde max-w-56'>
                <BrandLogoHorizontal />
              </div>
              <h1 className='max-w-sm text-4xl display-font text-verde-oscuro-500'>
                {t('404.title')}
              </h1>
              <aside className='pt-12 d-md-flex w-100'>
                <Link href='/' className='px-4 py-2 btn btn-primary me-4'>
                  {t('404.button')}
                </Link>
              </aside>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default FourOhFour;
