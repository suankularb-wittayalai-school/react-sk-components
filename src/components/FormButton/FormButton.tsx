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
 *
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
      onClick={onClick ? () => onClick() : undefined}
      style={style}
      type={type}
      value={label}
    />
  );
};

export default FormButton;
