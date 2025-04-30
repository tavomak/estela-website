import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { navItems } from '@/utils';
import MobileNavigation from '../MobileNavigation';
import DesktopNavigation from '../DesktopNavigation';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const router = useRouter();

  const handleMenuOpen = (open: boolean) => {
    setMenuOpen(open);
    if (open) {
      document.body.classList.add('modal-active');
    } else {
      document.body.classList.remove('modal-active');
    }
  };

  const itemActive = (path: string) => router.asPath === path;

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop === 0) {
        setIsVisible(true);
      } else if (currentScrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollTop = currentScrollTop;
    };

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    if (viewportWidth === 0) handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [viewportWidth]);

  return (
    <header
      className={`transition-all duration-500 ease-in-out sticky top-0 bg-white z-40 p-6 ${
        isVisible ? '' : '-translate-y-full'
      }`}
    >
      {viewportWidth < 972 ? (
        <MobileNavigation
          menuOpen={menuOpen}
          setMenuOpen={handleMenuOpen}
          navItems={navItems}
          itemActive={itemActive}
        />
      ) : (
        <DesktopNavigation navItems={navItems} itemActive={itemActive} />
      )}
    </header>
  );
};

export default Navbar;
