interface NavItem {
  label: string;
  path: string;
}

export interface MobileNavigationProps {
  menuOpen: boolean;
  navItems: NavItem[];
  // eslint-disable-next-line no-unused-vars
  setMenuOpen: (open: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  itemActive: (path: string) => boolean;
}
