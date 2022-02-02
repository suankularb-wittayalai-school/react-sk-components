// Modules
import React from "react";

// Components
import Navigation from "@components/Navigation";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

// Types
import { PageLayoutTypes } from "@layouts/PageLayout/PageLayout.type";

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
