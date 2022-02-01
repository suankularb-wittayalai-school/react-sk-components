// Modules
import React, { useState } from "react";

export interface NativeInputProps {
  name: string;
  type: "color" | "date" | "datetime-local" | "month" | "time" | "week";
  label: string;
  defaultValue?: string | number;
  attr?: React.InputHTMLAttributes<HTMLInputElement>;
}

/**
 * Native Input is meant for inputs that have native UIs
 * 
 * @param name Used for ID
 * 
 * @param type `input` element type, Keyboard Input supports
 * 
 * ```ts
 * "color" | "date" | "datetime-local" | "month" | "time" | "week"
 * ```
 * 
 * @param label The display label/placeholder
 * 
 * @param defaultValue The value that already is in the `input` element
 */
const NativeInput = ({
  name,
  type,
  label,
  defaultValue,
  attr,
}: NativeInputProps): JSX.Element => {
  const [inputValue, setInputValue] = useState(defaultValue);

  return (
    <div className="input--persistent">
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
        name={name}
        placeholder={label}
        readOnly={attr?.readOnly}
        required={attr?.required}
        type={type}
        value={inputValue}
      />
      <label className="input--persistent__label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default NativeInput;