interface NavItem {
  label: string;
  path: string;
}

export interface MobileNavigationProps {
  menuOpen: boolean;
  navItems: NavItem[];

  setMenuOpen: (open: boolean) => void;

  itemActive: (path: string) => boolean;
}
