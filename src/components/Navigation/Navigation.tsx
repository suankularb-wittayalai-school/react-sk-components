// Types
import {
  LinkElement as LinkElementType,
  NavItem,
  SKComponent,
} from "../../utils/types";

/**
 * An item inside of Navigation Bar
 * @param active Indicate if this Navigation Item is the current one
 * @param navItem Information about this Navigation Item
 * @param LinkElement The element wrapping the Anchor (i.e. `Link` from `next/link`)
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

export interface NavigationProps extends SKComponent {
  currentPath: string;
  navItems: Array<NavItem>;
  LinkElement?: LinkElementType;
  isTransparent?: boolean;
  attr?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

/**
 * A responsive Navigation bar
 * @param currentPath The current path of the application, can include queries and fragments
 * @param navItems A list of navigation items, each consists of name, icon, and URL; should not be longer than 5 items
 * @param LinkElement The element wrapping the Anchor (i.e. `Link` from `next/link`)
 * @param isTransparent If there is no background
 */
const Navigation = ({
  currentPath,
  navItems,
  LinkElement,
  isTransparent,
  className,
  style,
  attr,
}: NavigationProps): JSX.Element => {
  // Removes queries and fragments
  const cleanedCurrentPath = currentPath.split(/\?|#/)[0];

  return (
    <nav
      className={`${isTransparent ? "nav--scrim" : "nav"} ${className || ""}`}
      style={style}
    >
      <div className="nav__content">
        {navItems.map((navItem, index) => (
          <NavigationItem
            key={index}
            active={cleanedCurrentPath == navItem.url}
            navItem={navItem}
            LinkElement={LinkElement}
            attr={attr}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
