// Modules
import { useEffect, useState } from "react";

// Helpers
import { numStringToString } from "../../utils/helpers/converters";

// Types
import { SKComponent } from "../../utils/types";

export interface NativeInputProps extends SKComponent {
  name: string;
  type: "color" | "date" | "datetime-local" | "month" | "time" | "week";
  label: string;
  helperMsg?: string;
  errorMsg?: string;
  useAutoMsg?: boolean;
  onChange: (newValue: string) => void;
  defaultValue?: string | number;
  attr?: React.InputHTMLAttributes<HTMLInputElement>;
}

/**
 * Native Input is meant for inputs that have native UIs
 *
 * @param name Used for ID
 * @param type `input` element type, Keyboard Input supports
 *
 * ```ts
 * "color" | "date" | "datetime-local" | "month" | "time" | "week"
 * ```
 *
 * @param label The display label
 * @param helperMsg A message displayed below the input, usually guides or provides an example of what to enter in
 * @param useAutoMsg Tells the user what’s wrong with the input
 * @param autoError Automatically show helper or error message depending on browser error checking of the input
 * @param onChange Triggered when the input value changes
 * @param defaultValue The value that already is in the `input` element
 */
const NativeInput = ({
  name,
  type,
  label,
  helperMsg,
  errorMsg,
  useAutoMsg,
  onChange,
  defaultValue,
  className,
  style,
  attr,
}: NativeInputProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(
    numStringToString(defaultValue)
  );

  useEffect(() => onChange && onChange(inputValue), [inputValue]);
  useEffect(
    () => setInputValue(numStringToString(defaultValue)),
    [defaultValue]
  );

  return (
    <div className={`input--persistent ${className || ""}`} style={style}>
      {/* Input */}
      <input
        aria-labelledby={name}
        onChange={(e) => setInputValue(e.target.value)}
        autoComplete={attr?.autoComplete}
        autoFocus={attr?.autoFocus}
        crossOrigin={attr?.crossOrigin}
        disabled={attr?.disabled}
        enterKeyHint={attr?.enterKeyHint}
        form={attr?.form}
        id={name}
        list={attr?.list}
        name={name}
        placeholder={label}
        readOnly={attr?.readOnly}
        required={attr?.required}
        type={type}
        value={inputValue}
      />

      {/* Label */}
      <label className="input--persistent__label" htmlFor={name}>
        {label}
      </label>

      {/* Helper message */}
      {helperMsg && !errorMsg && (
        <span className={useAutoMsg ? "input__helper--auto" : "input__helper"}>
          {helperMsg}
        </span>
      )}

      {/* Error message */}
      {errorMsg && (
        <span className={useAutoMsg ? "input__error--auto" : "input__error"}>
          {errorMsg}
        </span>
      )}
    </div>
  );
};

export default NativeInput;
