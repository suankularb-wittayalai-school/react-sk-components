// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

export interface ButtonProps {
  name: string | JSX.Element;
  type: "filled" | "outlined" | "text";
  iconOnly?: boolean;
  icon?: JSX.Element;
  onClick?: Function;
  className?: string;
  style?: React.CSSProperties;
  attr?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

/**
 * A Button triggers an action
 * @param name The text in the button
 * @param type The type of the button, can be "filled" | "outlined" | "text"
 * @param icon An icon in the form of a JSX Element, will be placed in front of the text
 */
const Button = ({
  name,
  type,
  iconOnly,
  icon,
  onClick,
  className,
  style,
  attr,
}: ButtonProps) => (
  <button
    autoFocus={attr?.autoFocus}
    className={`${
      type == "outlined"
        ? "btn--outlined"
        : type == "text"
        ? "btn--text"
        : "btn--filled"
    } ${iconOnly ? "btn--icon" : icon ? "btn--has-icon" : ""} ${
      className || ""
    }`}
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
    onClick={() => {
      if (onClick) onClick();
    }}
  >
    {icon}
    <span>{name}</span>
  </button>
);

export default Button;
