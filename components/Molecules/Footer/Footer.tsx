import EstelaLogo from '@/components/Atoms/Svg/EstelaIcon';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <footer className="bg-ea-verde-oscuro text-white">
      <div className="container mx-auto md:flex">
        <div className="p-12 w-full space-y-4 my-auto">
          <div className="text-ea-verde w-full max-w-64 mb-12">
            <EstelaLogo />
          </div>
          <div>
            <p className="text-sm lg:text-xl font-bold">
              Creamos vinculos duraderos
            </p>
            <h2 className="display-font text-4xl lg:text-5xl font-semibold">
              ¡Conversemos!
            </h2>
          </div>
          <Link
            href="/"
            className="btn btn-secondary text-xs lg:text-base text-ea-amarillo border-ea-amarillo me-4"
            rel="noreferrer"
          >
            {t('contact_title')}
          </Link>
          <ul className="flex text-2xl space-x-6">
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
            className="btn btn-secondary text-xs lg:text-base text-ea-verde border-ea-verde me-4"
            target="_blank"
            rel="noreferrer"
          >
            {t('download_credentials')}
          </a>
          <div className="text-xs lg:text-base pt-2 border-t lg:space-x-5 border-ea-verde">
            <p className="inline mr-2 lg:mr-0">Privacidad</p>
            <p className="inline">Términos y condiciones</p>
            <p className="block lg:inline">
              Todos los derechos reservados
              <span className="text-ea-verde"> estela estudio digital</span>
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/footer-item-mobile.png"
            alt="Estela Logo"
            width={786}
            height={536}
            className="block md:hidden "
          />
          <Image
            src="/footer-item.png"
            alt="Estela Logo"
            width={1088}
            height={1296}
            className="hidden md:block"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
