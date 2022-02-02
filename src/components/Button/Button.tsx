// Modules
import React from "react";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css"

// Types
import { ButtonProps } from "@components/Button/Button.types";

/**
 * A Button triggers an action
 * @param name The text in the button
 * @param type The type of the button, can be "filled" | "outlined" | "text"
 * @param icon An icon in the form of a JSX Element, will be placed in front of the text
 */
const Button = ({ name, type, icon, onClick, attr }: ButtonProps) => (
  <button
    className={
      type == "outlined"
        ? "btn-outlined"
        : type == "text"
        ? "btn--text"
        : "btn--filled"
    }
    autoFocus={attr.autoFocus}
    disabled={attr.disabled}
    form={attr.form}
    formAction={attr.formAction}
    formEncType={attr.formEncType}
    formMethod={attr.formMethod}
    formNoValidate={attr.formNoValidate}
    formTarget={attr.formTarget}
    name={attr.name}
    type={attr.type}
    value={attr.value}
    onClick={() => onClick()}
  >
    {icon}
    <span>{name}</span>
  </button>
);

export default Button;
