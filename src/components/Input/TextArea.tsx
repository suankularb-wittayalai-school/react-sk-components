// Modules
import { useEffect, useState } from "react";

export interface TextAreaProps {
  name: string;
  label: string;
  onChange: Function;
  defaultValue?: string | number;
  className?: string;
  style?: React.CSSProperties;
  attr?: React.TextareaHTMLAttributes<HTMLInputElement>;
}

/**
 * Text Area is a large area for a text input
 *
 * Focusing on Text Area will move the placeholder up to be the label of the Input
 *
 * @param name Used for ID
 * @param type `input` element type, Keyboard Input supports
 * @param label The display label/placeholder
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
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => onChange && onChange(inputValue), [inputValue]);

  return (
    <div className={`input textarea ${className || ""}`} style={style}>
      <textarea
        aria-labelledby={name}
        onChange={(e) => setInputValue(e.target.value)}
        autoComplete={attr?.autoComplete}
        autoFocus={attr?.autoFocus}
        cols={attr?.cols}
        dirName={attr?.dirName}
        disabled={attr?.disabled}
        form={attr?.form}
        maxLength={attr?.maxLength}
        minLength={attr?.minLength}
        name={name}
        placeholder={label}
        readOnly={attr?.readOnly}
        required={attr?.required}
        rows={attr?.rows}
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
