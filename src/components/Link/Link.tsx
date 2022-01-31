// Modules
import React, { ReactNode } from "react";

// Styles
import "suankularb-components/dist/css/suankularb-components.min.css";

// Types
import { LinkElement as LinkElementType } from "@utils/types/elements";

export interface LinkProps {
  name: string;
  type: "filled" | "outlined" | "text";
  icon?: JSX.Element;
  url: string;
  LinkElement?: LinkElementType;
  style?: React.CSSProperties;
  attr?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

/**
 * A Link Button redirects the user to a page
 * @param name The text in the button
 * @param type The type of the button, can be "filled" | "outlined" | "text"
 * @param icon An icon in the form of a JSX Element, will be placed in front of the text
 * @param url The location of the page this Link Button leads to
 * @param LinkElement The element wrapping the Anchor (i.e. `Link` from `next/link`)
 */
const LinkButton = ({
  name,
  type,
  icon,
  url,
  LinkElement,
  style,
  attr,
}: LinkProps) =>
  LinkElement ? (
    <LinkElement href={url}>
      <a
        className={`${
          type == "outlined"
            ? "btn-outlined"
            : type == "text"
            ? "btn--text"
            : "btn--filled"
        }`}
        style={style}
      >
        {icon}
        <span>{name}</span>
      </a>
    </LinkElement>
  ) : (
    <a
      className={
        type == "outlined"
          ? "btn-outlined"
          : type == "text"
          ? "btn--text"
          : "btn--filled"
      }
      download={attr?.download}
      href={url}
      hrefLang={attr?.hrefLang}
      media={attr?.media}
      ping={attr?.ping}
      rel={attr?.rel}
      target={attr?.target}
      type={attr?.type}
      referrerPolicy={attr?.referrerPolicy}
    >
      {icon}
      <span>{name}</span>
    </a>
  );

export default LinkButton;
