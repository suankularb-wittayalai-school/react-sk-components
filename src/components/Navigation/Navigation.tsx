// Modules
import React from "react";

// Types
import { LinkElement as LinkElementType } from "@utils/types/elements";
import { NavItem } from "@utils/types/navigation";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

// Types
import { NavigationProps } from "@components/Navigation/Navigation.types";

/**
 * An item inside of Navigation Bar
 */
const NavigationItem = ({
  active,
  navItem,
  LinkElement,
  attr,
}: {
  active: boolean;
  navItem: NavItem;
  LinkElement?: LinkElementType;
  attr?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}): JSX.Element =>
  LinkElement ? (
    <LinkElement href={navItem.url}>
      <a className={`nav__item ${active ? "active" : ""}`}>
        <div className="nav__item__icon">
          {active ? navItem.icon.active : navItem.icon.inactive}
        </div>
        <span>{navItem.name}</span>
      </a>
    </LinkElement>
  ) : (
    <a
      className={`nav__item ${active ? "active" : ""}`}
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
      <div className="nav__item__icon">
        {active ? navItem.icon.active : navItem.icon.inactive}
      </div>
      <span>{navItem.name}</span>
    </a>
  );

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
}: NavigationProps): JSX.Element => {
  // Removes queries and fragments
  const cleanedCurrentPath = currentPath.split(/\?|#/)[0];

  return (
    <nav className="nav">
      {navItems.map((navItem) => (
        <NavigationItem
          active={cleanedCurrentPath == navItem.url}
          navItem={navItem}
          LinkElement={LinkElement}
          attr={attr}
        />
      ))}
    </nav>
  );
};

export default Navigation;
