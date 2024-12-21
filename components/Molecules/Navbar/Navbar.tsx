import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { navItems } from '@/utils';
import MobileNavigation from '../MobileNavigation';
import DesktopNavigation from '../DesktopNavigation';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  const router = useRouter();

  const itemActive = (path: string) => router.asPath === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
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
      className={`transition relative z-20 p-8 ${scrollTop > 150 ? 'bg-white sticky top-0 shadow-xl' : ''}`}
    >
      {viewportWidth < 972 ? (
        <MobileNavigation
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
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
