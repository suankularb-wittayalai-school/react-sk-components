// Modules
import { ReactNode } from "react";

// Components
import Navigation from "../../components/Navigation";

// Types
import {
  LinkElement as LinkElementType,
  NavItem,
  SKComponent,
} from "../../utils/types";

export interface PageLayoutProps extends SKComponent {
  currentPath: string;
  navItems: Array<NavItem>;
  LinkElement?: LinkElementType;
  children: ReactNode;
}

/**
 * The layout shared among all pages
 * @param currentPath The current path of the application, can include queries and fragments
 * @param navItems A list of navigation items, each consists of name, icon, and URL; should not be longer than 5 items
 */
const PageLayout = ({
  currentPath,
  navItems,
  LinkElement,
  children,
  className,
  style,
}: PageLayoutProps) => (
  <div className={`page-layout ${className}`} style={style}>
    <Navigation
      currentPath={currentPath}
      navItems={navItems}
      LinkElement={LinkElement}
    />
    {children}
  </div>
);

export default PageLayout;
