import { FC } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import Hamburger from '@/components/Molecules/Hamburger';
import EstelaIcon from '@/components/Atoms/Svg/BrandLogoHorizontal';
import LanguageSwitcher from '@/components/Atoms/LanguageSwitcher';
import Button from '@/components/Atoms/Button';
import CloseIcon from '@/components/Atoms/Svg/CloseIcon';
import CircleWhite from '@/components/Atoms/Svg/CircleWhite';
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
      className="container relative flex items-center justify-between p-3 mx-auto md:p-4 "
      aria-label="Global"
    >
      <Link
        className={`relative z-40 w-32 md:w-40 ${
          menuOpen ? 'text-ea-verde-300' : 'text-ea-verde-900'
        }`}
        href="/"
      >
        <EstelaIcon />
      </Link>
      <div>
        {!menuOpen && <Hamburger open={menuOpen} setOpen={setMenuOpen} />}
        {menuOpen && (
          <Button
            className="relative z-20 rounded-full size-6 md:size-8 bg-verde-oscuro-400 text-ea-verde-200"
            onClick={handleClose}
          >
            <span className="m-auto">
              <CloseIcon />
            </span>
          </Button>
        )}
      </div>
      <div
        className={`fixed inset-0 bg-[#639d90] transition-all duration-300 ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="relative flex flex-col h-full">
          <div className="absolute top-0 left-0 z-10 w-7/12 h-3/4 bg-verde-oscuro-400/80" />

          <div className="h-20 md:h-24" />
          <div className="z-20 px-16 overflow-hidden ">
            <ul className="mb-8 space-y-6">
              <div className="text-white">
                <LanguageSwitcher />
              </div>
              {navItems.map((item) => (
                <li
                  className={`w-fit text-4xl font-medium display-font uppercase hover:border-b-2 border-ea-verde ${
                    itemActive(item.path) ? 'text-ea-verde-300' : 'text-white'
                  }`}
                  key={item.label}
                >
                  <Link href={item.path} onClick={handleClose}>
                    <p className="mb-1"> {t(item.label)}</p>
                  </Link>
                </li>
              ))}
              {/* <li>
                <a
                  href="/credenciales_2024.pdf"
                  className="text-xs font-normal tracking-widest uppercase btn btn-secondary text-ea-verde border-ea-verde"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('download_credentials')}
                </a>
              </li> */}
            </ul>
          </div>
          <div
            className={`absolute z-40 w-full max-w-md sm:max-w-none rotate-180 -bottom-28 sm:-bottom-1/2 md:-bottom-3/4 text-ea-verde-400 ${menuOpen ? 'block' : 'hidden'}`}
          >
            <CircleWhite />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavigation;
