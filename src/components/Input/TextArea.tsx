// Modules
import { useEffect, useState } from "react";

// Types
import { SKComponent } from "../../utils/types";

export interface TextAreaProps extends SKComponent {
  name: string;
  label: string;
  onChange: (newValue: string) => void;
  defaultValue?: string;
  attr?: React.TextareaHTMLAttributes<HTMLInputElement>;
}

/**
 * Text Area is a large area for a text input
 *
 * Focusing on Text Area will move the placeholder up to be the label of the Input
 *
 * @param name Used for ID
 * @param label The display label/placeholder
 * @param onChange Triggered when the user content in Text Area changes
 * @param defaultValue The value that already is in the `textarea` element
 */
const TextArea = ({
  name,
  label,
  onChange,
  defaultValue,
  className,
  style,
  attr,
}: TextAreaProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(defaultValue || "");

  useEffect(() => onChange && onChange(inputValue), [inputValue]);

  return (
    <div className={`input textarea ${className || ""}`} style={style}>
      <textarea
        onChange={(e) => setInputValue(e.target.value)}
        autoComplete={attr?.autoComplete}
        autoFocus={attr?.autoFocus}
        disabled={attr?.disabled}
        form={attr?.form}
        id={name}
        maxLength={attr?.maxLength}
        minLength={attr?.minLength}
        name={name}
        placeholder={label}
        readOnly={attr?.readOnly}
        required={attr?.required}
        value={inputValue}
        wrap={attr?.wrap}
      />
      <label className="input__placeholder" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default TextArea;
