// Modules
import React, { useEffect, useState } from "react";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

export interface KeyboardInputProps {
  name: string;
  type: "email" | "number" | "password" | "tel" | "text" | "url";
  label: string;
  onChange: Function;
  defaultValue?: string | number;
  className?: string;
  style?: React.CSSProperties;
  attr?: React.InputHTMLAttributes<HTMLInputElement>;
}

/**
 * Keyboard Input is meant for input that requires the user to use their keyboard
 *
 * Focusing on Keyboard Input will move the placeholder up to be the label of the Input
 *
 * @param name Used for ID
 *
 * @param type `input` element type, Keyboard Input supports
 *
 * ```ts
 * "email" | "number" | "password" | "tel" | "text" | "url"
 * ```
 *
 * @param label The display label/placeholder
 *
 * @param defaultValue The value that already is in the `input` element
 */
const KeyboardInput = ({
  name,
  type,
  label,
  onChange,
  defaultValue,
  className,
  style,
  attr,
}: KeyboardInputProps): JSX.Element => {
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => onChange && onChange(inputValue), [inputValue]);

  return (
    <div className={`input ${className}`} style={style}>
      <input
        aria-labelledby={name}
        onChange={(e) => setInputValue(e.target.value)}
        autoComplete={attr?.autoComplete}
        autoFocus={attr?.autoFocus}
        crossOrigin={attr?.crossOrigin}
        disabled={attr?.disabled}
        enterKeyHint={attr?.enterKeyHint}
        form={attr?.form}
        list={attr?.list}
        max={attr?.max}
        maxLength={attr?.maxLength}
        min={attr?.min}
        minLength={attr?.minLength}
        multiple={attr?.multiple}
        name={name}
        pattern={attr?.pattern}
        placeholder={label}
        readOnly={attr?.readOnly}
        required={attr?.required}
        size={attr?.size}
        step={attr?.step}
        type={type}
        value={inputValue}
      />
      <label className="input__placeholder" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default KeyboardInput;
