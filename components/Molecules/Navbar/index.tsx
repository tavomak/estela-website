import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Image from 'next/image';
import { primaryLinks, socialMediaInfo, siteName } from '@utils/index';
import {
  FaSpotify,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';
import styles from './styles.module.scss';

const getSocialMediaIconByName = (networkName: string) => {
  switch (networkName.toLowerCase()) {
    case 'youtube':
      return <FaYoutube />;
    case 'spotify':
      return <FaSpotify />;
    case 'instagram':
      return <FaInstagram />;
    case 'tiktok':
      return <FaTiktok />;
    default:
      return null; // or return any other default icon here
  }
};

const Navbar = () => {
  const { t } = useTranslation('common');
  const { pathname } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`${styles.header} ${pathname === '/' && styles.absoluteNav} ${scrollTop > 150 && styles.active}`} id="header">
      <nav className={`container navbar navbar-expand-lg ${styles.nav}`}>
        <div className="container-fluid">
          <Link href="/" className={`navbar-brand ${styles.primaryNav} ps-lg-2`}>
            <Image
              src="/logo-ll.svg"
              alt={siteName}
              width={scrollTop > 150 ? 150 : 250}
              height={scrollTop > 150 ? 60 : 120}
            />
          </Link>
          <button
            className={`d-lg-none hamburger hamburger--emphatic ${menuOpen ? 'is-active' : ''}`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
            <span className="display-none">menu</span>
          </button>
          <div className={`collapse navbar-collapse text-center ${menuOpen ? 'show' : ''}`} id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              {primaryLinks.length && primaryLinks.map((item) => (
                <li className="nav-item position-relative px-2" key={item.name}>
                  <Link href={item.route} className={`nav-link ${styles.navLink} ${pathname === '/' && styles.home}`}>
                    <p className="mb-0">
                      {t(item.name)}
                    </p>
                  </Link>
                </li>
              ))}
              <li className="mx-2">
                {socialMediaInfo.length && socialMediaInfo.map((item) => (
                  <a
                    href={item.route}
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.navLink} ${pathname === '/' && styles.home} px-2`}
                    key={item.name}
                  >
                    { getSocialMediaIconByName(item.name) }
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
