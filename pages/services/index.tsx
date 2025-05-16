import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import ContentBlockImage from '@/components/Molecules/ContentBlockImage';
import Layout from '@/components/Templates/Layout';
import Modal from '@/components/Templates/Modal';
import ServiceCard from '@/components/Molecules/ServiceCard';
import SquaresCircle from '@/components/Atoms/Svg/SquaresCircle';
import DecorativeBar from '@/components/Atoms/Svg/DecorativeBar';
import CircleCurves from '@/components/Atoms/Svg/CircleCurves';
import BrandLogoHorizontal from '@/components/Atoms/Svg/BrandLogoHorizontal';
import FormTalkUs from '@/components/Molecules/Forms/FormTalkUs';
import { getServicePageInfo } from '@/utils/lib/api';
import { InferGetStaticPropsType } from 'next';

export async function getStaticProps(context: any) {
  const { locale } = context;
  const response = await getServicePageInfo('services', [locale]);
  const data = response?.data || [];

  return {
    props: {
      data,
    },
    revalidate: 100,
  };
}

export const Services = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [showModal, setShowModal] = useState(false);

  const { t } = useTranslation('common');
  const content = data?.service || {};
  console.log(content);
  return (
    <Layout
      title={t(content.title)}
      description="Servicios de desarrollo y diseño web, marketing digital e identidad de marca"
    >
      <section className="w-full px-4 bg-ea-verde-400">
        <article className="items-center gap-6 pt-8 pb-16 mx-auto text-6xl 2xl:container lg:flex">
          <ContentBlockImage
            title={content.heroSection?.title}
            titleClass="font-normal text-ea-amarillo w-11/12 text-pretty"
            subtitle={content.heroSection?.subtitle}
            subtitleClass="font-light text-white text-base md:text-3xl w-11/12"
            content={content.heroSection?.description}
            contentClass="text-ea-verde-300 font-normal text-xs md:text-lg w-11/12 text-pretty"
            rtl={false}
          >
            <div className="hidden ml-auto mr-16 w-fit lg:block">
              <SquaresCircle />
            </div>
          </ContentBlockImage>
        </article>
      </section>

      <section className="w-full bg-gray-100">
        <article className="relative px-4 lg:py-32 2xl:container 2xl:mx-auto">
          <div className="w-11/12 mr-auto md:mx-auto">
            <div className="w-full gap-12 mx-auto my-10 xl:w-3/4 2xl:w-full 2xl:flex">
              <div className="w-full gap-8 my-auto 2xl:w-1/2 sm:flex 2xl:block">
                <div className="w-full lg:w-3/4">
                  <h1 className="text-4xl font-medium text-balance display-font md:text-6xl text-ea-verde-900">
                    {t('services_title_design-web')}
                  </h1>
                  <Link
                    href="/services"
                    className="hidden mt-4 text-sm font-medium uppercase border-2 w-fit sm:block 2xl:hidden btn btn-secondary text-ea-verde-900 border-ea-verde-900"
                  >
                    {t('more_services')}
                  </Link>
                </div>
                <div>
                  <p className="text-base font-light 2xl:mt-4 text-pretty md:text-3xl text-ea-verde-900">
                    {t('services_parragraph_design-web')}
                  </p>
                </div>
                <Link
                  href="/services"
                  className="mt-4 text-xs font-medium uppercase border-2 2xl:mt-8 md:text-sm sm:hidden 2xl:block btn btn-secondary text-ea-verde-900 border-ea-verde-900 w-fit"
                >
                  {t('more_services')}
                </Link>
              </div>
              <div className="justify-center gap-12 my-10 space-y-8 lg:space-y-0 lg:flex">
                {content.services1.map((service: any, index: number) => (
                  <ServiceCard
                    key={service.title}
                    service={service}
                    containerClass={index === 0 ? 'md:pb-10' : 'md:pb-16'}
                  />
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="w-full">
        <article className="relative px-4 mx-auto lg:py-32">
          <div className="w-11/12 mr-auto md:mx-auto">
            <div className="w-full gap-12 mx-auto my-10 2xl:justify-center lg:flex xl:w-4/5 2xl:w-full">
              <div className="">
                <Image
                  src="/Square4Col.png"
                  width={590}
                  height={520}
                  alt="Square4Col"
                  className="hidden ml-auto mr-20 2xl:block"
                />
              </div>
              <div className="w-full lg:mt-8 lg:w-3/4 2xl:w-1/2">
                <h1 className="mb-2 text-4xl font-medium lg:mb-4 text-balance display-font md:text-6xl text-ea-verde-900">
                  {t('services_title_strategies')}
                </h1>
                <p className="text-base font-light 2xl:mt-4 text-pretty 2xl:text-balance md:text-3xl text-ea-verde-900">
                  {t('services_parragraph_strategies')}
                </p>
                <Link
                  href="/services"
                  className="mt-4 text-sm font-medium uppercase border-2 w-fit btn btn-secondary text-ea-verde-900 border-ea-verde-900"
                >
                  {t('more_services')}
                </Link>
              </div>
              <div className="lg:flex 2xl:w-1/4">
                <div className="flex flex-col items-end">
                  <ServiceCard service={content.serviceCard2[0]} />
                  <Image
                    src="/Square2Col.png"
                    width={600}
                    height={210}
                    alt="Square2Col"
                    className="hidden mx-auto mt-8 lg:block 2xl:hidden"
                  />
                </div>
                <Image
                  src="/Square1Col.png"
                  width={516}
                  height={209}
                  alt="Square1Col"
                  className="mx-auto mt-8 sm:hidden"
                />
                <Image
                  src="/Square2Col.png"
                  width={463}
                  height={116}
                  alt="Square2Col"
                  className="hidden mx-auto mt-8 sm:block lg:hidden"
                />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="relative w-full bg-gray-100">
        <article className="relative px-4 lg:py-32 2xl:container 2xl:mx-auto">
          <div className="w-11/12 mr-auto md:mx-auto">
            <div className="w-full gap-12 mx-auto my-10 xl:w-3/4 2xl:w-full 2xl:flex">
              <div className="w-full gap-8 my-auto 2xl:w-1/2 sm:flex 2xl:block">
                <div className="w-full lg:w-3/4">
                  <h1 className="text-4xl font-medium text-balance display-font md:text-6xl text-ea-verde-900">
                    {t('services_title_marketing')}
                  </h1>
                  <Link
                    href="/services"
                    className="hidden mt-4 text-sm font-medium uppercase border-2 w-fit sm:block 2xl:hidden btn btn-secondary text-ea-verde-900 border-ea-verde-900"
                  >
                    {t('more_services')}
                  </Link>
                </div>
                <div>
                  <p className="text-base font-light 2xl:mt-4 text-balance md:text-3xl text-ea-verde-900">
                    {t('services_parragraph_marketing')}
                  </p>
                </div>
                <Link
                  href="/services"
                  className="mt-4 text-xs font-medium uppercase border-2 2xl:mt-8 md:text-sm sm:hidden 2xl:block btn btn-secondary text-ea-verde-900 border-ea-verde-900 w-fit"
                >
                  {t('more_services')}
                </Link>
              </div>
              <div className="gap-12 my-10 space-y-8 lg:space-y-0 lg:flex">
                {content.serviceCard3?.map((service: any, index: number) => (
                  <ServiceCard
                    key={service.title}
                    service={service}
                    containerClass={index === 0 ? 'md:pb-20' : 'md:pb-28'}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute left-0 hidden -top-4 lg:block text-ea-verde-500">
            <DecorativeBar />
          </div>
        </article>
      </section>

      <section className="relative w-full overflow-hidden">
        <div className="absolute left-0 hidden -bottom-24 lg:block 2xl:hidden">
          <Image
            src="/SunLinesMobile.png"
            width={660}
            height={400}
            alt="Sun Lines Mobile"
          />
        </div>
        <div className="absolute bottom-0 left-0 hidden 2xl:block">
          <Image src="/SunLines.png" width={792} height={480} alt="Sun Lines" />
        </div>
        <article className="relative px-4 mx-auto lg:py-32">
          <div className="w-11/12 mr-auto md:mx-auto">
            <div className="justify-center w-full gap-12 mx-auto my-10 2xl:justify-end 2xl:items-center lg:flex xl:w-4/5 2xl:w-full">
              <div className="w-full lg:w-1/2 2xl:w-1/3">
                <h1 className="mb-2 text-4xl font-medium lg:mb-4 text-balance display-font md:text-6xl text-ea-verde-900">
                  {t('services_title_brand')}
                </h1>
                <div className="text-base 2xl:mt-4 text-pretty 2xl:text-balance md:text-3xl text-ea-verde-900">
                  <p className="mb-4 font-normal">
                    {t('services_subtitle_brand')}
                  </p>
                  <p className="font-light">{t('services_parragraph_brand')}</p>
                </div>
                <Link
                  href="/services"
                  className="mt-4 text-sm font-medium uppercase border-2 w-fit btn btn-secondary text-ea-verde-900 border-ea-verde-900"
                >
                  {t('more_services')}
                </Link>
              </div>
              <div className="lg:flex 2xl:w-1/4">
                <ServiceCard
                  service={content.serviceCard4[0]}
                  containerClass="md:pb-20"
                />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="relative w-full px-4 overflow-hidden bg-ea-verde-400">
        <div className="absolute w-11/12 transform sm:w-1/2 -bottom-60 sm:bottom-auto sm:-translate-y-1/2 sm:-left-40 sm:top-1/2">
          <Image
            src="/circleGreen.png"
            width={1020}
            height={1020}
            alt="Circle Curves"
            className="object-cover"
          />
        </div>
        <article className="pt-16 pb-44 sm:py-32 sm:flex">
          <ContentBlockImage
            title={content.section1?.title}
            titleClass="text-ea-verde-500 md:w-1/2 2xl:w-full mr-auto font-medium"
            subtitle={content.section1?.subtitle}
            subtitleClass="text-white font-normal text-base lg:text-3xl w-5/6 mr-auto text-balance"
            content={content.section1?.description}
            contentClass="text-ea-verde-200 text-base font-light lg:text-3xl w-5/6 mr-auto text-balance"
            btnLabel={t('wanna_know_more')}
            btnClass="text-ea-amarillo border-ea-amarillo"
            onClick={() => setShowModal(true)}
            rtl={false}
          />
        </article>
      </section>

      <Modal
        showModal={showModal}
        size="xl"
        onClick={() => setShowModal(false)}
        bgColor="bg-ea-verde-200"
        noPadding
      >
        <div className="w-4/5 mx-auto lg:w-full md:flex">
          <div className="hidden lg:w-2/5 bg-ea-verde-900 text-ea-verde-200 lg:block">
            <CircleCurves />
          </div>
          <div className="w-full p-4 space-y-6 md:pt-12 lg:w-3/5">
            <div className="w-full space-y-4">
              <div className="w-full max-w-32 md:max-w-56 text-ea-verde-900">
                <BrandLogoHorizontal />
              </div>
              <h1 className="text-4xl font-semibold display-font lg:text-5xl text-ea-verde-900">
                {t('homepage_talkUs_form_title')}
              </h1>
              <h2 className="text-lg font-light md:w-3/4 lg:text-2xl text-ea-verde-900">
                {t('homepage_content_section_subtitle-2')}
              </h2>
            </div>

            <FormTalkUs
              service="Contacto"
              title="Escríbenos"
              image="/images/contact.png"
              content="Nos pondremos en contacto contigo lo antes posible"
            />
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default Services;
