// Modules
import React from "react";

// Styles
import "suankularb-components/dist/css/suankularb-components.min.css"

export interface LinkProps {
  name: string;
  type: "filled" | "outlined" | "text";
  icon?: JSX.Element;
  url: string;
}

/**
 * A Link Button redirects the user to a page
 * @param name The text in the button
 * @param type The type of the button, can be "filled" | "outlined" | "text"
 * @param icon An icon in the form of a JSX Element, will be placed in front of the text
 * @param url The location of the page this Link Button leads to
 */
const LinkButton = ({ name, type, icon, url }: LinkProps) => (
  <a
    className={
      type == "outlined"
        ? "btn-outlined"
        : type == "text"
        ? "btn--text"
        : "btn--filled"
    }
    href={url}
  >
    {icon}
    <span>{name}</span>
  </a>
);

export default LinkButton;
