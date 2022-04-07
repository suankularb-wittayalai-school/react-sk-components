// Types
import { SKComponent } from "../../utils/types";

export interface ButtonProps extends SKComponent {
  name?: string | JSX.Element;
  label?: string;
  type: "filled" | "outlined" | "text" | "tonal";
  iconOnly?: boolean;
  icon?: JSX.Element;
  isDangerous?: boolean;
  onClick?: Function;
  attr?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

/**
 * A Button triggers an action
 * @param name The text in the button
 * @param label The text label for screenreaders
 * @param type The type of the button, can be "filled" | "outlined" | "text"
 * @param iconOnly Has only icon
 * @param icon An icon in the form of a JSX Element, will be placed in front of the text
 * @param isDangerous If the button triggers some dangerous action, makes Button have danger color
 * @param onClick Triggered on click
 */
const Button = ({
  name,
  label,
  type,
  iconOnly,
  icon,
  isDangerous,
  onClick,
  className,
  style,
  attr,
}: ButtonProps) => (
  <button
    aria-label={label}
    autoFocus={attr?.autoFocus}
    className={`${
      type == "outlined"
        ? "btn--outlined"
        : type == "text"
        ? "btn--text"
        : type == "tonal"
        ? "btn--tonal"
        : "btn--filled"
    } ${iconOnly ? "btn--icon" : icon ? "btn--has-icon" : ""} ${
      isDangerous ? "btn--danger" : ""
    } ${className || ""}`}
    disabled={attr?.disabled}
    form={attr?.form}
    formAction={attr?.formAction}
    formEncType={attr?.formEncType}
    formMethod={attr?.formMethod}
    formNoValidate={attr?.formNoValidate}
    formTarget={attr?.formTarget}
    name={attr?.name}
    style={style}
    type={attr?.type}
    value={attr?.value}
    onClick={() => onClick && onClick()}
  >
    {icon}
    {name && <span>{name}</span>}
  </button>
);

export default Button;
