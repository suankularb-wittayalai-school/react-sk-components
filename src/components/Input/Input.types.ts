import { DropdownOption } from "@utils/types/input";

export interface DropdownProps {
  name: string;
  label: string;
  options: Array<DropdownOption>;
  placeholder?: string;
  noOptionsText?: string;
  icon?: { expandMore: JSX.Element; expandLess: JSX.Element };
}

export interface FileInputProps {
  name: string;
  label: string;
  onChange?: Function;
}

export interface KeyboardInputProps {
  name: string;
  type: "email" | "number" | "password" | "tel" | "text" | "url";
  label: string;
  onChange: Function;
  defaultValue?: string | number;
  attr?: React.InputHTMLAttributes<HTMLInputElement>;
}

export interface NativeInputProps {
  name: string;
  type: "color" | "date" | "datetime-local" | "month" | "time" | "week";
  label: string;
  onChange?: Function;
  defaultValue?: string | number;
  attr?: React.InputHTMLAttributes<HTMLInputElement>;
}

export interface SearchProps {
  placeholder?: string;
  onChange?: Function;
  onSubmit?: Function;
}
