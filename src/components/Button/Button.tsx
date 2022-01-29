// Modules
import React from "react";

// Styles
import "suankularb-components/dist/css/suankularb-components.min.css"

export interface ButtonProps {
  name: string;
  type: "filled" | "outlined" | "text";
  icon?: JSX.Element;
  onClick: Function;
}

/**
 * A Button triggers an action or redirects the user to a page
 * @param name The text in the button
 * @param type The type of the button, can be "filled" | "outlined" | "text"
 * @param icon An icon in the form of a JSX Element, will be placed in front of the text
 */
const Button = ({ name, type, icon }: ButtonProps) => (
  <button
    className={
      type == "outlined"
        ? "btn-outlined"
        : type == "text"
        ? "btn--text"
        : "btn--filled"
    }
  >
    {icon}
    <span>{name}</span>
  </button>
);

export default Button;
