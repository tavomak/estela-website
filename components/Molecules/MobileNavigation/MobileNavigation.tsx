import { FC } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import Hamburger from '@/components/Molecules/Hamburger';
import EstelaIcon from '@/components/Atoms/Svg/BrandLogoHorizontal';
import { MobileNavigationProps } from './types';

const MobileNavigation: FC<MobileNavigationProps> = ({
  menuOpen = false,
  setMenuOpen,
  navItems,
  itemActive,
}) => {
  const { t } = useTranslation('common');

  const handleClose = () => {
    document.body.classList.remove('modal-active');
    setMenuOpen(false);
  };

  return (
    <nav
      className="container relative flex items-center justify-between mx-auto md:px-4"
      aria-label="Global"
    >
      <Link className="z-20 w-40 text-verde-oscuro-500" href="/">
        <EstelaIcon />
      </Link>
      <Hamburger open={menuOpen} setOpen={setMenuOpen} />
      <div
        className={`fixed inset-0 bg-white transition-all duration-300 ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="h-48" />
          <div className="px-16 overflow-y-auto">
            <ul className="mb-8 space-y-6">
              {navItems.map((item) => (
                <li
                  className={`w-fit text-base hover:border-b-2 border-ea-verde ${
                    itemActive(item.path) ? 'text-ea-verde' : 'text-ea-gris'
                  }`}
                  key={item.label}
                >
                  <Link href={item.path} onClick={handleClose}>
                    <p className="mb-1"> {t(item.label)}</p>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/credenciales_2024.pdf"
                  className="text-xs font-normal tracking-widest uppercase btn btn-secondary text-ea-verde border-ea-verde"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('download_credentials')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavigation;
