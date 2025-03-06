import { MouseEvent, useState } from 'react';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import BrandLogoHorizontal from '@/components/Atoms/Svg/BrandLogoHorizontal';
import Modal from '@/components/Templates/Modal';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { siteName } from '@/utils';
import FormContact from '../Forms/FormContact';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowModal(!showModal);
  };
  const { t } = useTranslation('common');
  return (
    <footer className="bg-ea-verde-oscuro">
      <div className="container items-end mx-auto md:flex">
        <div className="w-full my-16 space-y-10">
          <div className="w-full mb-12 text-ea-verde max-w-64">
            <BrandLogoHorizontal />
          </div>
          <div>
            <p className="text-sm text-white lg:text-lg">
              {t('footer_lasting_bonds')}
            </p>
            <h2 className="text-4xl text-white">{t('lets_talk')}</h2>
          </div>
          <a
            href="!#"
            onClick={(e) => handleClick(e)}
            className="text-xs font-normal tracking-widest uppercase btn btn-secondary text-ea-amarillo border-ea-amarillo me-4"
            rel="noreferrer"
          >
            {t('contact_title')}
          </a>
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
            className="text-xs font-normal tracking-widest uppercase btn btn-secondary text-ea-verde border-ea-verde me-4"
            target="_blank"
            rel="noreferrer"
          >
            {t('download_credentials')}
          </a>
          <div className="block pt-2 text-xs text-white border-t lg:text-base lg:space-x-3 border-ea-verde">
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
            className="block md:hidden "
          />
          <Image
            src="/footer-item.png"
            alt="footer image"
            width={1088}
            height={1296}
            className="hidden md:block"
          />
        </div>
      </div>
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
    </footer>
  );
};

export default Footer;
