// Modules
import React from "react";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

// Types
import { HeaderProps } from "@components/Header/Header.types";
import { LinkElement as LinkElementType } from "@utils/types/elements";

/**
 * The Icons section of Header, shaped like a pill
 * @param pageIcon The icon that symobolises the page
 * @param backGoesTo The link in which clicking Back icon will lead to
 * @param backIcon The Back icon
 * @param LinkElement The element wrapping the Anchor (i.e. `Link` from `next/link`)
 */
const HeaderIcons = ({
  pageIcon,
  backGoesTo,
  backIcon,
  LinkElement,
}: {
  pageIcon: JSX.Element | string;
  backGoesTo: string;
  backIcon?: JSX.Element | string;
  LinkElement?: LinkElementType;
}) => {
  const BackIconElement = () =>
    backIcon ? (
      // If backIcon is a string, render Material Icon of that string
      typeof backIcon == "string" ? (
        <i className="icon" translate="no">
          {backIcon}
        </i>
      ) : (
        // If backIcon is a JSX Element, render it as is
        backIcon
      )
    ) : (
      // Default
      <i className="icon" translate="no">
        arrow_back
      </i>
    );
  return (
    <div className="header__icons">
      {LinkElement ? (
        <LinkElement href={backGoesTo}>
          <a className="header__icons__abck">
            <BackIconElement />
          </a>
        </LinkElement>
      ) : (
        <a href={backGoesTo} className="header__icons__back">
          <BackIconElement />
        </a>
      )}
      <div className="header__icons__page">
        {typeof pageIcon == "string" ? (
          <i className="icon" translate="no">
            {pageIcon}
          </i>
        ) : (
          pageIcon
        )}
      </div>
    </div>
  );
};

/**
 * Header summarises what the page is about in very few words
 *
 * Header requires a background gradient, apply background gradient with a class or a style entry
 * @param name.title The name of the page
 * @param name.subtitle Some more info about the page (i.e. the type of the page)
 * @param pageIcon The icon that symobolises the page
 * @param backGoesTo The link in which clicking Back icon will lead to
 * @param backIcon The Back icon
 * @param LinkElement The element wrapping the Anchor (i.e. `Link` from `next/link`)
 */
const Header = ({
  name,
  pageIcon,
  backGoesTo,
  backIcon,
  LinkElement,
  className,
  style,
}: HeaderProps) => (
  <header className={`header ${className || ""}`} style={style}>
    <HeaderIcons
      pageIcon={pageIcon}
      backGoesTo={backGoesTo}
      backIcon={backIcon}
      LinkElement={LinkElement}
    />
    <div className="header__text">
      <h1>{name.title}</h1>
      {name.subtitle && <p>{name.subtitle}</p>}
    </div>
  </header>
);

export default Header;
