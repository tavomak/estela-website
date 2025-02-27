import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import BrandLogoHorizontal from '@/components/Atoms/Svg/BrandLogoHorizontal';
import React, { FC } from 'react';
import { DesktopNavigationProps } from './types';

const DesktopNavigation: FC<DesktopNavigationProps> = ({
  navItems,
  itemActive,
}) => {
  const { t } = useTranslation('common');

  return (
    <nav
      className="container flex items-center justify-between mx-auto md:px-4"
      aria-label="Global"
    >
      <Link className="w-40 text-ea-verde-oscuro" href="/">
        <BrandLogoHorizontal />
      </Link>
      <ul className="flex gap-4 xl:gap-14">
        {navItems &&
          navItems.length &&
          navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.path}
                className={`block text-sm font-semibold text-neutral-600 ${itemActive(item.path) ? 'border-b-2 border-ea-verde' : ''}`}
              >
                {t(item.label)}
              </Link>
            </li>
          ))}
      </ul>
      <ul className="flex gap-2 xl:gap-4">
        <li>
          <a
            href="/credenciales_2024.pdf"
            className="text-xs uppercase btn btn-secondary lg:text-base text-ea-verde border-ea-verde me-4"
            target="_blank"
            rel="noreferrer"
          >
            {t('download_credentials')}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
