import Link from 'next/link';
import { useTranslations } from 'next-intl';
import BrandLogoHorizontal from '@/components/Atoms/Svg/BrandLogoHorizontal';
import { FC } from 'react';
import LanguageSwitcher from '@/components/Atoms/LanguageSwitcher';
import Button from '@/components/Atoms/Button';
import { siteName } from '@/utils';
import { DesktopNavigationProps } from './types';

const DesktopNavigation: FC<DesktopNavigationProps> = ({ navItems, itemActive, handleClick }) => {
  const t = useTranslations('common');

  return (
    <nav className='flex justify-between items-center mx-auto container lg:p-4' aria-label='Global'>
      <div className='w-40'>
        <Link aria-label={siteName} className='w-40 text-ea-verde-oscuro-500' href='/'>
          <BrandLogoHorizontal />
        </Link>
      </div>
      <ul className='flex gap-4 items-center xl:gap-14'>
        {navItems &&
          navItems.length &&
          navItems.map(item => (
            <li key={item.label}>
              <Link
                href={item.path}
                className={`block tracking-widest text-xs font-semibold text-neutral-600 uppercase ${itemActive(item.path) ? 'border-b-2 border-ea-verde-500' : ''}`}
              >
                {t(item.label)}
              </Link>
            </li>
          ))}
      </ul>
      <ul className='flex gap-2 items-center xl:gap-4'>
        <li>
          <Button className='btn btn-primary' onClick={() => handleClick()}>
            {t('contact_title')}
          </Button>
        </li>
        <li>
          <a
            href='/credenciales_2024.pdf'
            className='btn btn-secondary'
            target='_blank'
            rel='noreferrer'
          >
            {t('download_credentials')}
          </a>
        </li>
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
