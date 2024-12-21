import React from 'react';

interface NavItem {
  label: string;
  path: string;
}

export interface MobileNavigationProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navItems: NavItem[];
  // eslint-disable-next-line no-unused-vars
  itemActive: (path: string) => boolean;
}
