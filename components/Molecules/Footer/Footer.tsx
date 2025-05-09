import { MouseEvent, useState } from 'react';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Modal from '@/components/Templates/Modal';
import useTranslation from 'next-translate/useTranslation';
import { siteName } from '@/utils';
import Image from 'next/image';
import CircleCurves from '@/components/Atoms/Svg/CircleCurves';
import BrandLogoHorizontal from '@/components/Atoms/Svg/BrandLogoHorizontal';
import FormTalkUs from '@/components/Molecules/Forms/FormTalkUs';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowModal(!showModal);
  };
  const { t } = useTranslation('common');
  return (
    <footer className="bg-verde-oscuro-500">
      <div className="container items-end mx-auto md:flex bg-no-repeat bg-right bg-contain sm:bg-[url('/footer-item.png')]">
        <div className="w-full p-6 pt-24 space-y-10 md:py-24">
          <div>
            <p className="text-sm text-ea-verde-200 lg:text-lg">
              {t('footer_lasting_bonds')}
            </p>
            <h2 className="text-2xl font-medium lg:text-4xl text-ea-verde-200">
              {t('lets_talk')}
            </h2>
            <a
              href="!#"
              onClick={(e) => handleClick(e)}
              className="mt-6 text-xs font-medium tracking-widest uppercase md:text-sm btn btn-secondary text-ea-amarillo border-ea-amarillo me-4"
              rel="noreferrer"
            >
              {t('contact_title')}
            </a>
          </div>
          <ul className="flex space-x-6 text-2xl text-white">
            <li>
              <a
                href="https://www.linkedin.com/company/estelaestudio/"
                target="_blank"
                className="transition hover:opacity-75"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/estelaestudio/"
                target="_blank"
                className="transition hover:opacity-75"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
          <a
            href="/credenciales_2024.pdf"
            className="text-xs font-bold tracking-widest uppercase md:font-medium md:text-sm btn btn-secondary text-ea-verde border-ea-verde me-4"
            target="_blank"
            rel="noreferrer"
          >
            {t('download_credentials')}
          </a>
          <div className="block w-full pt-8 text-xs text-white border-t md:pt-2 md:w-1/2 lg:text-sm lg:space-x-3 border-ea-verde">
            <p className="inline mr-3 lg:mr-0">{t('footer_privacy')}</p>
            <p className="inline">{t('footer_terms_conditions')}</p>
            <p className="block lg:inline">
              {t('footer_all_rights_reserved')}
              <span className="text-ea-verde"> {siteName}</span>
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/footer-item-mobile.png"
            alt="footer image"
            width={786}
            height={536}
            className="block sm:hidden "
          />
        </div>
      </div>
      <Modal
        showModal={showModal}
        size="xxl"
        onClick={() => setShowModal(false)}
        bgColor="bg-ea-verde-200"
        noPadding
      >
        <div className="w-3/4 mx-auto lg:w-full md:flex">
          <div className="hidden lg:w-2/5 bg-ea-verde-900 text-ea-verde-200 lg:block">
            <CircleCurves />
          </div>
          <div className="w-full p-4 space-y-4 md:pt-12 lg:w-3/5">
            <div className="w-full space-y-8">
              <div className="w-full max-w-56 text-ea-verde-900">
                <BrandLogoHorizontal />
              </div>
              <h1 className="text-4xl font-semibold lg:text-6xl text-ea-verde-900">
                {t('homepage_talkUs_form_title')}
              </h1>
              <h2 className="text-lg font-light lg:text-3xl text-ea-verde-900">
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
    </footer>
  );
};

export default Footer;
