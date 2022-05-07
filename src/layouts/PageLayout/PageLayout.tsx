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
  navIsTransparent?: boolean;
  children: ReactNode;
}

/**
 * The layout shared among all pages
 * @param currentPath The current path of the application, can include queries and fragments
 * @param navItems A list of navigation items, each consists of name, icon, and URL; should not be longer than 5 items
 * @param LinkElement The element wrapping the Anchor (i.e. `Link` from `next/link`)
 * @param navIsTransparent If there is no background on Navigation
 */
const PageLayout = ({
  currentPath,
  navItems,
  LinkElement,
  navIsTransparent,
  children,
  className,
  style,
}: PageLayoutProps) => (
  <div className={`page-layout ${className}`} style={style}>
    <Navigation
      currentPath={currentPath}
      navItems={navItems}
      LinkElement={LinkElement}
      isTransparent={navIsTransparent}
    />
    {children}
  </div>
);

export default PageLayout;
