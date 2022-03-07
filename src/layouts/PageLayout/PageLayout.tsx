// Modules
import { ReactNode } from "react";

// Components
import Navigation from "../../components/Navigation";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

// Types
import { LinkElement as LinkElementType } from "../../utils/types";
import { NavItem } from "../../utils/types";

export interface PageLayoutTypes {
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
}: PageLayoutTypes) => (
  <div className="page-layout">
    <Navigation
      currentPath={currentPath}
      navItems={navItems}
      LinkElement={LinkElement}
    />
    {children}
  </div>
);

export default PageLayout;
