import { useState } from 'react';
import Image from 'next/image';
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
  return (
    <Layout
      title={t(content.title)}
      description="Servicios de desarrollo y diseño web, marketing digital e identidad de marca"
    >
      <section className="px-4 w-full bg-verde-oscuro-400">
        <article className="gap-6 items-center pt-8 pb-16 mx-auto text-6xl 2xl:container lg:flex">
          <div className="block mr-auto mb-6 w-1/2 lg:hidden">
            <Image
              src="/halfCircle.png"
              width={350}
              height={300}
              alt="Half Circle"
            />
          </div>
          <ContentBlockImage
            title={content.heroSection?.title}
            titleClass="font-normal text-ea-amarillo w-11/12 text-pretty"
            subtitle={content.heroSection?.subtitle}
            subtitleClass="font-light text-white text-base md:text-3xl w-11/12"
            content={content.heroSection?.description}
            contentClass="text-ea-verde-300 font-normal text-xs md:text-lg w-11/12 text-pretty"
            rtl={false}
          >
            <div className="hidden mr-16 ml-auto w-fit lg:block">
              <SquaresCircle />
            </div>
          </ContentBlockImage>
        </article>
      </section>

      <section className="w-full bg-gray-100">
        <article className="container flex relative flex-col gap-10 px-4 py-32 mx-auto lg:flex-row lg:items-center">
          <div className="lg:w-5/12">
            <h1 className="text-4xl font-medium text-balance display-font md:text-6xl text-ea-verde-900">
              {t('services_title_design-web')}
            </h1>
            <p className="text-base font-light 2xl:pe-20 2xl:mt-4 text-pretty md:text-3xl text-ea-verde-900">
              {t('services_parragraph_design-web')}
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:w-7/12 lg:flex-row 2xl:gap-12">
            {content.services1.map((service: any, index: number) => (
              <ServiceCard
                key={service.title}
                service={service}
                containerClass={index === 0 ? 'md:pb-10' : 'md:pb-16'}
              />
            ))}
          </div>
        </article>
      </section>

      <section className="w-full">
        <article className="relative px-4 mx-auto lg:py-32">
          <div className="mr-auto w-11/12 md:mx-auto">
            <div className="gap-12 mx-auto my-10 w-full 2xl:justify-center lg:flex xl:w-4/5 2xl:w-full">
              <div className="">
                <Image
                  src="/Square4Col.png"
                  width={590}
                  height={520}
                  alt="Square4Col"
                  className="hidden mr-20 ml-auto 2xl:block"
                />
              </div>
              <div className="mb-8 w-full lg:mt-8 lg:w-3/4 2xl:w-1/2">
                <h1 className="mb-2 text-4xl font-medium lg:mb-4 text-balance display-font md:text-6xl text-ea-verde-900">
                  {t('services_title_strategies')}
                </h1>
                <p className="text-base font-light 2xl:mt-4 text-pretty 2xl:text-balance md:text-3xl text-ea-verde-900">
                  {t('services_parragraph_strategies')}
                </p>
                {/* <Link
                  href="/services"
                  className="mt-4 text-sm font-medium uppercase border-2 w-fit btn btn-secondary text-ea-verde-900 border-ea-verde-900"
                >
                  {t('more_services')}
                </Link> */}
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

      <section className="w-full bg-gray-100">
        <article className="container flex relative flex-col gap-10 px-4 py-32 mx-auto lg:flex-row lg:items-center">
          <div className="lg:w-5/12">
            <h1 className="text-4xl font-medium text-balance display-font md:text-6xl text-ea-verde-900">
              {t('services_title_marketing')}
            </h1>
            <p className="text-base font-light 2xl:pe-20 2xl:mt-4 text-pretty md:text-3xl text-ea-verde-900">
              {t('services_parragraph_marketing')}
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:w-7/12 lg:flex-row 2xl:gap-12">
            {content.serviceCard3?.map((service: any, index: number) => (
              <ServiceCard
                key={service.title}
                service={service}
                containerClass={index === 0 ? 'md:pb-20' : 'md:pb-28'}
              />
            ))}
          </div>
        </article>
      </section>

      <section className="overflow-hidden relative w-full">
        <div className="hidden absolute left-0 -bottom-28 lg:block 2xl:hidden">
          <Image
            src="/SunLinesMobile.png"
            width={660}
            height={400}
            alt="Sun Lines Mobile"
          />
        </div>
        <div className="hidden absolute bottom-0 left-0 2xl:block">
          <Image src="/SunLines.png" width={792} height={480} alt="Sun Lines" />
        </div>
        <article className="relative px-4 mx-auto lg:py-32">
          <div className="mr-auto w-11/12 md:mx-auto">
            <div className="gap-10 justify-center mx-auto my-24 w-full 2xl:justify-end 2xl:items-center lg:flex xl:w-4/5 2xl:w-full">
              <div className="w-full lg:w-1/2 2xl:w-1/3">
                <h1 className="mb-2 text-4xl font-medium lg:mb-4 text-balance display-font md:text-6xl text-ea-verde-900">
                  {t('services_title_brand')}
                </h1>
                <div className="mb-8 text-base 2xl:mt-4 text-pretty 2xl:text-balance md:text-3xl text-ea-verde-900">
                  <h3 className="mb-4 font-normal">
                    {t('services_subtitle_brand')}
                  </h3>
                  <p className="font-light">{t('services_parragraph_brand')}</p>
                </div>
                {/* <Link
                  href="/services"
                  className="mt-4 text-sm font-medium uppercase border-2 w-fit btn btn-secondary text-ea-verde-900 border-ea-verde-900"
                >
                  {t('more_services')}
                </Link> */}
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
        <div className="hidden absolute left-0 -top-4 lg:block text-ea-verde-500">
          <DecorativeBar />
        </div>
      </section>

      <section className="overflow-hidden relative px-8 w-full bg-verde-oscuro-400">
        <article className="container flex-row-reverse pt-14 mx-auto sm:py-32 sm:flex">
          <ContentBlockImage
            title={content.section1?.title}
            titleClass="text-ea-verde-500 sm:w-1/2 md:w-full mr-auto font-medium"
            content={content.section1?.subtitle}
            contentClass="text-white font-normal text-base lg:text-3xl w-5/6 mr-auto 2xl:text-balance"
            btnLabel={t('wanna_know_more')}
            btnClass="text-ea-amarillo border-ea-amarillo"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
            rtl={false}
          >
            <div>
              <p className="text-sm font-normal leading-6 md:text-lg text-ea-verde-200">
                {content.content}
              </p>
              <div className="w-full h-[1.5px] my-4 bg-ea-verde-500" />
              <h3 className="text-2xl font-light md:text-3xl text-ea-amarillo-500">
                {content.testimonial?.testimonialText}
              </h3>
              <div className="items-center mt-4 md:flex">
                <div className="flex items-center">
                  <div className="rounded-full size-32">
                    <Image
                      src={content.testimonial?.image.url || ''}
                      width={64}
                      height={64}
                      alt="Imagen de autor"
                      className="object-contain w-full h-full"
                    />
                  </div>

                  <div className="px-4 text-verde-oscuro-500">
                    <h3 className="text-sm font-normal text-gray-100 md:text-lg">
                      {content.testimonial?.autorName}
                    </h3>
                    <p className="text-sm font-normal text-gray-100 md:text-lg">
                      {content.testimonial?.autorRole}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ContentBlockImage>
          <div>
            <Image
              src="/mobileCircleGreen.png"
              width={750}
              height={350}
              alt="Circle Green"
              className="object-cover w-full sm:hidden"
            />
          </div>
        </article>
      </section>

      <Modal
        showModal={showModal}
        size="xl"
        onClick={() => setShowModal(false)}
        bgColor="bg-ea-verde-200"
        noPadding
      >
        <div className="mx-auto w-4/5 lg:w-full md:flex text-ea-amarillo-500">
          <div className="hidden lg:w-2/5 bg-ea-verde-900 text-ea-verde-200 lg:block">
            <CircleCurves />
          </div>
          <div className="p-4 space-y-6 w-full md:pt-12 lg:w-3/5">
            <div className="space-y-4 w-full">
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
