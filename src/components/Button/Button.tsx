// Types
import { classNames } from "../../utils/helpers/elements";
import { SKComponent } from "../../utils/types";

export interface ButtonProps extends SKComponent {
  name?: string;
  label?: string | JSX.Element;
  type: "filled" | "outlined" | "text" | "tonal";
  icon?: JSX.Element;
  iconOnly?: boolean;
  disabled?: boolean;
  isDangerous?: boolean;
  onClick?: () => void;
  attr?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

/**
 * A Button triggers an action
 * @param name The text label for screenreaders
 * @param label The text in the button
 * @param type The type of the button, can be "filled" | "outlined" | "text"
 * @param icon An icon in the form of a JSX Element, will be placed in front of the text
 * @param iconOnly Has only icon
 * @param disabled If the button is not available
 * @param isDangerous If the button triggers some dangerous action, makes Button have danger color
 * @param onClick Triggered on click
 */
const Button = ({
  name,
  label,
  type,
  icon,
  iconOnly,
  disabled,
  isDangerous,
  onClick,
  className,
  style,
  attr,
}: ButtonProps) => (
  <button
    aria-label={name}
    autoFocus={attr?.autoFocus}
    className={classNames([
      "btn",
      type == "outlined"
        ? "btn--outlined"
        : type == "text"
        ? "btn--text"
        : type == "tonal"
        ? "btn--tonal"
        : "btn--filled",
      iconOnly ? "btn--icon" : icon && "btn--has-icon",
      disabled && "btn--disabled",
      isDangerous && "btn--danger",
      className,
    ])}
    disabled={disabled || attr?.disabled}
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
    onClick={onClick ? () => onClick() : undefined}
  >
    {icon}
    {label && <span>{label}</span>}
  </button>
);

export default Button;
