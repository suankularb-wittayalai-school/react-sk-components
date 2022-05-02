import { SKComponent } from "../../utils/types";

export interface FormButtonProps extends SKComponent {
  name?: string;
  label: string;
  type: "submit" | "reset";
  appearance: "filled" | "outlined" | "text" | "tonal";
  disabled?: boolean;
  isDangerous?: boolean;
  onClick?: () => void;
  attr?: React.InputHTMLAttributes<HTMLInputElement>;
}

/**
 * Form Button is used to control forms by either resetting or submitting them
 * @param name The text label for screenreaders
 * @param label The text in the button
 * @param type Type of action the button triggers, can be "submit" | "reset"
 * @param appearance The appearance of the button, can be "filled" | "outlined" | "text"
 * @param disabled If the button is not available
 * @param isDangerous If the button triggers some dangerous action, makes Button have danger color
 * @param onClick Triggered on click
 */
const FormButton = ({
  name,
  label,
  type,
  appearance,
  disabled,
  isDangerous,
  onClick,
  attr,
  className,
  style,
}: FormButtonProps): JSX.Element => {
  return (
    <input
      aria-label={name}
      className={`${
        appearance == "outlined"
          ? "btn--outlined"
          : appearance == "text"
          ? "btn--text"
          : appearance == "tonal"
          ? "btn--tonal"
          : "btn--filled"
      } ${disabled ? "btn--disabled" : ""} ${
        isDangerous ? "btn--danger" : ""
      } ${className || ""}`}
      disabled={disabled || attr?.disabled}
      formAction={attr?.formAction}
      formEncType={attr?.formEncType}
      formMethod={attr?.formMethod}
      formNoValidate={attr?.formNoValidate}
      formTarget={attr?.formTarget}
      id={name}
      name={name}
      onClick={disabled !== false && onClick ? () => onClick() : undefined}
      style={style}
      type={type}
      value={label}
    />
  );
};

export default FormButton;
