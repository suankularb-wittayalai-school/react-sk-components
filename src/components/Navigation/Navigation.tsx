// Modules
import React from "react";

// Types
import { LinkElement as LinkElementType } from "@utils/types/elements";

// Styles
import "suankularb-components/dist/css/suankularb-components.min.css";

const NavigationItem = ({
  cleanedCurrentPath,
  navItem,
  LinkElement,
  attr,
}: {
  cleanedCurrentPath: string;
  navItem: {
    name: string;
    icon: JSX.Element | {};
    url: string;
  };
  LinkElement?: LinkElementType;
  attr?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}) =>
  LinkElement ? (
    <LinkElement href={navItem.url}>
      <a
        className={`nav__item ${
          cleanedCurrentPath == navItem.url ? "active" : ""
        }`}
      >
        <div className="nav__item__icon">{navItem.icon}</div>
        <span>{navItem.name}</span>
      </a>
    </LinkElement>
  ) : (
    <a
      className={`nav__item ${
        cleanedCurrentPath == navItem.url ? "active" : ""
      }`}
      download={attr?.download}
      href={navItem.url}
      hrefLang={attr?.hrefLang}
      media={attr?.media}
      ping={attr?.ping}
      rel={attr?.rel}
      target={attr?.target}
      type={attr?.type}
      referrerPolicy={attr?.referrerPolicy}
    >
      <div className="nav__item__icon">{navItem.icon}</div>
      <span>{navItem.name}</span>
    </a>
  );

export interface NavigationProps {
  currentPath: string;
  navItems: Array<{
    name: string;
    icon: JSX.Element | {};
    url: string;
  }>;
  LinkElement?: LinkElementType;
  attr?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

/**
 * A responsive Navigation bar
 * @param currentPath The current path of the application, can include queries and fragments
 * @param navItems A list of navigation items, each consists of name, icon, and URL; should not be longer than 5 items
 */
const Navigation = ({
  currentPath,
  navItems,
  LinkElement,
  attr,
}: NavigationProps) => {
  // Removes queries and fragments
  const cleanedCurrentPath = currentPath.split(/\?|#/)[0];

  return (
    <nav className="nav">
      {navItems.map((navItem) => (
        <NavigationItem
          cleanedCurrentPath={cleanedCurrentPath}
          navItem={navItem}
          LinkElement={LinkElement}
          attr={attr}
        />
      ))}
    </nav>
  );
};

export default Navigation;
