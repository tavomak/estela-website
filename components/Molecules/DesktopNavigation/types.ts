interface NavItem {
  label: string;
  path: string;
}

export interface DesktopNavigationProps {
  navItems: NavItem[];
  // eslint-disable-next-line no-unused-vars
  itemActive: (path: string) => boolean;
}
