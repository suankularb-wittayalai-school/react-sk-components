// Modules
import React, { useState } from "react";

export interface NativeInputProps {
  name: string;
  type: "email" | "number" | "password" | "tel" | "text" | "url";
  label: string;
  defaultValue?: string | number;
  attr?: React.InputHTMLAttributes<HTMLInputElement>;
}

const NativeInput = ({
  name,
  type,
  label,
  defaultValue,
  attr,
}: NativeInputProps): JSX.Element => {
  const [inputValue, setInputValue] = useState(defaultValue);

  return <div className="input--persistent"></div>;
};

export default NativeInput;
