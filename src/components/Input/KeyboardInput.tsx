// Modules
import { useEffect, useState } from "react";

// Helpers
import { numStringToString } from "../../utils/helpers/converters";

// Types
import { SKComponent } from "../../utils/types";

export interface KeyboardInputProps extends SKComponent {
  name: string;
  type: "email" | "number" | "password" | "tel" | "text" | "url";
  label: string;
  helperMsg?: string;
  errorMsg?: string;
  useAutoMsg?: boolean;
  onChange: (newValue: string) => void;
  defaultValue?: string | number;
  attr?: React.InputHTMLAttributes<HTMLInputElement>;
}

/**
 * Keyboard Input is meant for input that requires the user to use their keyboard
 *
 * Focusing on Keyboard Input will move the placeholder up to be the label of the Input
 *
 * @param name Used for ID
 * @param type `input` element type, Keyboard Input supports
 *
 * ```ts
 * "email" | "number" | "password" | "tel" | "text" | "url"
 * ```
 *
 * @param label The display label/placeholder
 * @param helperMsg A message displayed below the input, usually guides or provides an example of what to enter in
 * @param useAutoMsg Tells the user what’s wrong with the input
 * @param autoError Automatically show helper or error message depending on browser error checking of the input
 * @param onChange Triggered when the input value changes
 * @param defaultValue The value that already is in the `input` element
 */
const KeyboardInput = ({
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
}: KeyboardInputProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(
    numStringToString(defaultValue)
  );

  useEffect(() => onChange && onChange(inputValue), [inputValue]);
  useEffect(
    () => setInputValue(numStringToString(defaultValue)),
    [defaultValue]
  );

  return (
    <div className={`input ${className || ""}`} style={style}>
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

      {/* Label */}
      <label className="input__placeholder" htmlFor={name}>
        {label}
      </label>

      {/* Helper message */}
      {(useAutoMsg
        ? // If auto message is on, don’t check for error message
          helperMsg
        : // Else, show helper message only when there is no error message
          helperMsg && !errorMsg) && (
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

export default KeyboardInput;
