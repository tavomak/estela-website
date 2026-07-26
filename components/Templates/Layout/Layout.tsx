import { FC, ReactNode } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { siteName, siteUrl } from '@/utils/constants';
import Navbar from '@/components/Molecules/Navbar';
import Footer from '@/components/Molecules/Footer';
import Modal from '@/components/Templates/Modal';
import GoToTopButton from '@/components/Molecules/GoToTopButton';

type Props = {
  children: ReactNode;
  className?: string;
  description: string;
  title: string;
  schema?: any;
  ogImage?: string;
  noIndex?: boolean;
};

const ogLocales: Record<string, string> = {
  es: 'es_ES',
  en: 'en_US',
};

const Layout: FC<Props> = ({
  children,
  className,
  description,
  title,
  schema,
  ogImage = '/android-icon-192x192.png',
  noIndex = false,
}) => {
  const { asPath, locale, locales, defaultLocale } = useRouter();
  const path = asPath.split(/[?#]/)[0];
  const localePrefix = locale && locale !== defaultLocale ? `/${locale}` : '';
  const canonicalUrl = `${siteUrl}${localePrefix}${path === '/' ? '' : path}`;
  const pageTitle = `${title} | ${siteName}`;

  const hrefFor = (loc: string) => {
    const prefix = loc === defaultLocale ? '' : `/${loc}`;
    return `${siteUrl}${prefix}${path === '/' ? '' : path}`;
  };

  const structuredData = schema ?? {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/android-icon-192x192.png`,
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet='UTF-8' />
        <meta name='description' content={description || siteName} />
        {noIndex && <meta name='robots' content='noindex, nofollow' />}
        <link rel='canonical' href={canonicalUrl} />
        {(locales ?? []).map(loc => (
          <link key={loc} rel='alternate' hrefLang={loc} href={hrefFor(loc)} />
        ))}
        <link rel='alternate' hrefLang='x-default' href={hrefFor(defaultLocale ?? 'es')} />
        <meta property='og:locale' content={ogLocales[locale ?? 'es'] ?? 'es_ES'} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={canonicalUrl} />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={description || siteName} />
        <meta property='og:image' content={`${siteUrl}${ogImage}`} />
        <meta property='og:site_name' content={siteName} />
        <meta name='twitter:card' content='summary_large_image' />
        <link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/apple-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/apple-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/apple-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/apple-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-icon-180x180.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/android-icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Navbar />
      <main className={`min-h-[calc(100vh-217px)] ${className || ''}`}>{children}</main>
      <ToastContainer />
      <Footer />
      <GoToTopButton />
      <Modal size='xxl' bgColor='bg-ea-verde-200' noPadding />
      <Script
        id='structured-data'
        key='structured-data'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        strategy='beforeInteractive'
      />
    </>
  );
};

export default Layout;
