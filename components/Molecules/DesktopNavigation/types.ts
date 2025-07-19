interface NavItem {
  label: string;
  path: string;
}

export interface DesktopNavigationProps {
  navItems: NavItem[];

  itemActive: (path: string) => boolean;
  handleClick: () => void;
}
