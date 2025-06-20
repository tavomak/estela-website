import { FC } from 'react';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Modal from '@/components/Templates/Modal';
import useTranslation from 'next-translate/useTranslation';
import { siteName } from '@/utils';
import Image from 'next/image';
import CircleCurves from '@/components/Atoms/Svg/CircleCurves';
import BrandLogoHorizontal from '@/components/Atoms/Svg/BrandLogoHorizontal';
import FormTalkUs from '@/components/Molecules/Forms/FormTalkUs';
import DecorativeBar from '@/components/Atoms/Svg/DecorativeBar';

const Footer: FC<{ showModal: boolean; handleClick: () => void }> = ({
  showModal,
  handleClick,
}) => {
  const { t } = useTranslation('common');
  return (
    <footer className="bg-verde-oscuro-500">
      <div className="container items-end mx-auto md:flex bg-no-repeat bg-right bg-contain sm:bg-[url('/footer-item.png')]">
        <div className="p-6 pt-24 space-y-10 w-full md:py-24">
          <div>
            <p className="text-sm text-ea-verde-200 lg:text-lg">
              {t('footer_lasting_bonds')}
            </p>
            <h2 className="text-2xl font-medium lg:text-4xl text-ea-verde-200">
              {t('lets_talk')}
            </h2>
            <a
              href="!#"
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
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
          <div className="flex justify-between pt-8 w-full text-xs text-white border-t md:w-1/2 lg:text-sm border-ea-verde">
            <p className="block lg:inline">
              {t('footer_all_rights_reserved')}
              <span className="lowercase text-ea-verde"> {siteName}</span>
            </p>
            <p className="inline mr-3 lg:mr-0">{t('footer_privacy')}</p>
            <p className="inline">{t('footer_terms_conditions')}</p>
          </div>
        </div>
        <div>
          <Image
            src="/footer-item-mobile.png"
            alt="footer image"
            width={786}
            height={536}
            className="block sm:hidden"
          />
        </div>
      </div>
      <Modal
        showModal={showModal}
        size="xxl"
        onClick={() => handleClick()}
        bgColor="bg-ea-verde-200"
        noPadding
      >
        <div className="overflow-hidden mx-auto w-full lg:flex">
          <div className="w-full lg:hidden text-ea-verde-900">
            <DecorativeBar />
          </div>
          <div className="hidden lg:w-2/5 bg-ea-verde-900 text-ea-verde-200 lg:block">
            <CircleCurves />
          </div>
          <div className="py-4 mx-auto space-y-6 w-11/12 md:p-4 md:pt-12 lg:w-3/5">
            <div className="space-y-4 w-full">
              <div className="w-full max-w-40 md:max-w-56 text-ea-verde-500">
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
    </footer>
  );
};

export default Footer;
