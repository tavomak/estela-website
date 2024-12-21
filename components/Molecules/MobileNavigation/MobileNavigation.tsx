import { FC } from 'react';
import Link from 'next/link';
import Hamburger from '@/components/Molecules/Hamburger';
import useTranslation from 'next-translate/useTranslation';
import EstelaIcon from '@/components/Atoms/Svg/BrandLogoHorizontal';
import { MobileNavigationProps } from './types';

const MobileNavigation: FC<MobileNavigationProps> = ({
  menuOpen = false,
  setMenuOpen,
  navItems,
}) => {
  const { t } = useTranslation('common');

  return (
    <nav
      className="container relative flex items-center justify-between mx-auto md:px-4"
      aria-label="Global"
    >
      <Link className="text-ea-verde-oscuro w-40" href="/">
        <EstelaIcon />
      </Link>
      <Hamburger open={menuOpen} setOpen={setMenuOpen} />
      <ul
        className={`ps-8 flex flex-col gap-1 justify-center fixed w-screen h-screen left-0 top-0 transition-all bg-gray-200 bg-opacity-95 ${
          menuOpen ? 'top-0' : 'top-[-120%]'
        }`}
      >
        {navItems.map((item) => (
          <li className="text-xl font-bold text-dark-blue" key={item.label}>
            <Link href={item.path}>
              <p className="mb-1"> {t(item.label)}</p>
            </Link>
          </li>
        ))}

        <li>
          <a
            href="/credenciales_2024.pdf"
            className="btn btn-secondary text-xs lg:text-base text-ea-verde border-ea-verde me-4"
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

export default MobileNavigation;
