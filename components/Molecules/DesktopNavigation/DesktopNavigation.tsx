import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import BrandLogoHorizontal from '@/components/Atoms/Svg/BrandLogoHorizontal';
import React, { FC } from 'react';
import LanguageSwitcher from '@/components/Atoms/LanguageSwitcher';
import Button from '@/components/Atoms/Button';
import { DesktopNavigationProps } from './types';

const DesktopNavigation: FC<DesktopNavigationProps> = ({
  navItems,
  itemActive,
  handleClick,
}) => {
  const { t } = useTranslation('common');

  return (
    <nav
      className="flex justify-between items-center mx-auto lg:container md:px-4"
      aria-label="Global"
    >
      <Link className="w-40 text-verde-oscuro-500" href="/">
        <BrandLogoHorizontal />
      </Link>
      <ul className="flex gap-4 xl:gap-14">
        {navItems &&
          navItems.length &&
          navItems.map((item) => (
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
      <ul className="flex gap-2 items-center xl:gap-4">
        <li>
          <Button
            className="mb-0 text-xs tracking-widest uppercase btn btn-primary"
            onClick={() => handleClick()}
          >
            {t('contact_title')}
          </Button>
        </li>
        <li>
          <a
            href="/credenciales_2024.pdf"
            className="mb-0 text-xs tracking-widest uppercase btn btn-secondary text-ea-verde border-ea-verde"
            target="_blank"
            rel="noreferrer"
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
