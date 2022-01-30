// Modules
import React from "react";

export interface NavigationProps {
  currentPath: string;
  navItems: Array<{
    name: string;
    icon: JSX.Element;
    url: string;
  }>;
}

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
