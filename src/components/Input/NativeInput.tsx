// Modules
import React, { useEffect, useState } from "react";

// Styles
import "suankularb-components/dist/css/suankularb-components.min.css";

export interface NativeInputProps {
  name: string;
  type: "color" | "date" | "datetime-local" | "month" | "time" | "week";
  label: string;
  onChange?: Function;
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
 * @param label The display label
 *
 * @param defaultValue The value that already is in the `input` element
 */
const NativeInput = ({
  name,
  type,
  label,
  onChange,
  defaultValue,
  attr,
}: NativeInputProps): JSX.Element => {
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => onChange && onChange(inputValue), [inputValue]);

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
