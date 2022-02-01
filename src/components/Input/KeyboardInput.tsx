// Modules
import React, { useState } from "react";

export interface KeyboardInputProps {
  name: string;
  type: "email" | "number" | "password" | "tel" | "text" | "url";
  label: string;
  defaultValue?: string | number;
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
  defaultValue,
  attr,
}: KeyboardInputProps): JSX.Element => {
  const [inputValue, setInputValue] = useState(defaultValue);

  return (
    <div className="input">
      <input
        aria-labelledby={name}
        onChange={(e) => setInputValue(e.target.value)}
        accept={attr?.accept}
        alt={attr?.alt}
        autoComplete={attr?.autoComplete}
        autoFocus={attr?.autoFocus}
        capture={attr?.capture}
        checked={attr?.checked}
        crossOrigin={attr?.name}
        disabled={attr?.disabled}
        enterKeyHint={attr?.enterKeyHint}
        form={attr?.form}
        formAction={attr?.formAction}
        formEncType={attr?.formEncType}
        formMethod={attr?.formMethod}
        formNoValidate={attr?.formNoValidate}
        formTarget={attr?.formTarget}
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
        src={attr?.src}
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
