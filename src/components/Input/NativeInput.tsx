// Modules
import { useEffect, useState } from "react";

// Types
import { SKComponent } from "../../utils/types";

export interface NativeInputProps extends SKComponent {
  name: string;
  type: "color" | "date" | "datetime-local" | "month" | "time" | "week";
  label: string;
  helperMsg?: string;
  errorMsg?: string;
  onChange: (newValue: string) => void;
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
  helperMsg,
  errorMsg,
  onChange,
  defaultValue,
  className,
  style,
  attr,
}: NativeInputProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(
    (typeof defaultValue == "number"
      ? defaultValue.toString()
      : defaultValue) || ""
  );

  useEffect(() => onChange && onChange(inputValue), [inputValue]);

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
      {helperMsg && <span className="input__helper">{helperMsg}</span>}

      {/* Error message */}
      {errorMsg && !helperMsg && (
        <span className="input__error">{errorMsg}</span>
      )}
    </div>
  );
};

export default NativeInput;
