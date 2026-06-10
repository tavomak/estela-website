import type { GetStaticPropsContext } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Layout from '@/components/Templates/Layout';
import CircleWhite from '@/components/Atoms/Svg';
import BrandLogoHorizontal from '@/components/Atoms/Svg/BrandLogoHorizontal';
import { loadMessages } from '@/utils/i18n/getMessages';

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    messages: await loadMessages(locale),
  },
});

const FourOhFour = () => {
  const t = useTranslations('common');
  return (
    <Layout title={t('404_title')} description={t('404_description')}>
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
              <h1 className='max-w-sm text-4xl display-font text-ea-verde-oscuro-500'>
                {t('404_title')}
              </h1>
              <aside className='pt-12 d-md-flex w-100'>
                <Link href='/' className='px-4 py-2 btn btn-primary me-4'>
                  {t('404_button')}
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
