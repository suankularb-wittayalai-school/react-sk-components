// Modules
import React from "react";

// Styles
import "suankularb-components/dist/css/suankularb-components.min.css"

export interface NavigationProps {
  currentPath: string;
  navItems: Array<{
    name: string;
    icon: JSX.Element;
    url: string;
  }>;
}

/**
 * A responsive Navigation bar
 * @param currentPath The current path of the application, can include queries and fragments
 * @param navItems A list of navigation items, each consists of name, icon, and URL; should not be longer than 5 items
 */
const Navigation = ({ currentPath, navItems }: NavigationProps) => {
  // Removes queries and fragments
  const cleanedCurrentPath = currentPath.split(/\?|#/)[0];

  return (
    <nav className="nav">
      {navItems.map((navItem) => (
        <a
          className={`nav__item ${
            cleanedCurrentPath == navItem.url ? "active" : ""
          }`}
          href={navItem.url}
        >
          <div className="nav__item__icon">{navItem.icon}</div>
          <span>{navItem.name}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
