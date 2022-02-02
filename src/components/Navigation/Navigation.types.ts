// Types
import { LinkElement, NavItem } from "@utils/types";

export interface NavigationProps {
  currentPath: string;
  navItems: Array<NavItem>;
  LinkElement?: LinkElement;
  attr?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}
