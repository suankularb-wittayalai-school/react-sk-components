// Modules
import React from "react";
import { ReactNode } from "react";

// Components
import Navigation from "@components/Navigation";

// Styles
import "suankularb-components/dist/css/suankularb-components.min.css";

// Types
import { LinkElement as LinkElementType } from "@utils/types/elements";
import { NavItem } from "@utils/types/navigation";

/**
 * The layout shared among all pages
 * @param currentPath The current path of the application, can include queries and fragments
 * @param navItems A list of navigation items, each consists of name, icon, and URL; should not be longer than 5 items
 */
const PageLayout = ({
  currentPath,
  navItems,
  children,
}: {
  currentPath: string;
  navItems: Array<NavItem>;
  LinkElement?: LinkElementType;
  children: ReactNode;
}) => (
  <div className="page-layout">
    <Navigation currentPath={currentPath} navItems={navItems} />
    {children}
  </div>
);

export default PageLayout;
