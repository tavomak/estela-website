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
  itemActive,
}) => {
  const { t } = useTranslation('common');

  return (
    <nav
      className="container relative flex items-center justify-between mx-auto md:px-4"
      aria-label="Global"
    >
      <Link className="z-20 w-40 text-ea-verde-oscuro" href="/">
        <EstelaIcon />
      </Link>
      <Hamburger open={menuOpen} setOpen={setMenuOpen} />
      <ul
        className={`ps-16 flex flex-col gap-12 justify-center fixed w-screen h-screen left-0 top-0 backdrop-blur-md transition-all bg-white bg-opacity-75 ${
          menuOpen ? 'top-0' : 'top-[-120%]'
        }`}
      >
        {navItems.map((item) => (
          <li
            className={`w-fit text-base hover:border-b-2 border-ea-verde ${itemActive(item.path) ? 'text-ea-verde' : 'text-ea-gris'}`}
            key={item.label}
          >
            <Link href={item.path}>
              <p className="mb-1"> {t(item.label)}</p>
            </Link>
          </li>
        ))}

        <li>
          <a
            href="/credenciales_2024.pdf"
            className="text-sm uppercase btn btn-secondary text-ea-verde"
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
