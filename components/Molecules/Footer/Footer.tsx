import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Modal from '@/components/Templates/Modal';
import useTranslation from 'next-translate/useTranslation';
import { siteName } from '@/utils';
import Image from 'next/image';
import { useModal } from '@/hooks/useModal';

const Footer = () => {
  const { toggleModal } = useModal();
  const { t } = useTranslation('common');

  const handleClick = () => {
    toggleModal();
  };

  return (
    <footer className='bg-ea-verde-oscuro-500'>
      <div className="container items-end mx-auto md:flex bg-no-repeat bg-right bg-contain sm:bg-[url('/footer-item.png')]">
        <div className='px-4 pt-24 space-y-10 w-full md:py-24'>
          <div>
            <p className='text-sm text-ea-verde-200 lg:text-lg'>{t('footer_lasting_bonds')}</p>
            <h2 className='text-2xl font-medium lg:text-4xl text-ea-verde-200'>{t('lets_talk')}</h2>
            <a
              href='!#'
              onClick={e => {
                e.preventDefault();
                handleClick();
              }}
              className='mt-6 text-xs font-medium tracking-widest uppercase md:text-sm btn btn-outline'
              rel='noreferrer'
            >
              {t('contact_title')}
            </a>
          </div>
          <ul className='flex space-x-6 text-2xl text-white'>
            <li>
              <a
                href='https://www.linkedin.com/company/estelaestudio/'
                target='_blank'
                className='transition hover:opacity-75'
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/estelaestudio/'
                target='_blank'
                className='transition hover:opacity-75'
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
          <a
            href='/credenciales_2024.pdf'
            className='text-xs font-bold tracking-widest uppercase md:font-medium md:text-sm btn btn-secondary me-4'
            target='_blank'
            rel='noreferrer'
          >
            {t('download_credentials')}
          </a>
          <div className='flex justify-between pt-8 w-full text-xs text-white border-t md:w-1/2 lg:text-sm border-ea-verde'>
            <p className='block lg:inline'>
              {t('footer_all_rights_reserved')}
              <span className='lowercase text-ea-verde'> {siteName}</span>
            </p>
            <p className='hidden mr-3 lg:mr-0'>{t('footer_privacy')}</p>
            <p className='hidden'>{t('footer_terms_conditions')}</p>
          </div>
        </div>
        <div>
          <Image
            src='/footer-item-mobile.png'
            alt='footer image'
            width={786}
            height={536}
            className='block sm:hidden'
          />
        </div>
      </div>
      <Modal size='xxl' bgColor='bg-ea-verde-200' noPadding />
    </footer>
  );
};

export default Footer;
