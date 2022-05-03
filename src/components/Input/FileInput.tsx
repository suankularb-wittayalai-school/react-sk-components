// Modules
import { useEffect, useState } from "react";

// Components
import MaterialIcon from "../Icon/MaterialIcon";

// Types
import { SKComponent } from "../../utils/types";

export interface FileInputProps extends SKComponent {
  name: string;
  label: string;
  noneAttachedMsg?: string;
  helperMsg?: string;
  onChange?: (newValue: File) => void;
  defaultValue?: File;
  attr?: React.InputHTMLAttributes<HTMLInputElement>;
}

/**
 * File Input accepts one file and displays it
 * @param name Used for ID
 * @param label The display label
 * @param helperMsg A message displayed below the input, usually guides or provides an example of what to enter in
 * @param onChange Triggered when the input value changes
 * @param defaultValue The value that already is in the `input` element
 */
const FileInput = ({
  name,
  label,
  noneAttachedMsg,
  helperMsg,
  onChange,
  defaultValue,
  className,
  style,
  attr,
}: FileInputProps) => {
  const [file, setFile] = useState<File | undefined>(defaultValue);

  useEffect(() => onChange && file && onChange(file), [file]);

  return (
    <div className={`input--file ${className || ""}`} style={style}>
      {/* Input */}
      <input
        accept={attr?.accept}
        autoComplete={attr?.autoComplete}
        capture={attr?.capture}
        disabled={attr?.disabled}
        form={attr?.form}
        id={name}
        type="file"
        onChange={(e) =>
          setFile(e.target.files ? e.target.files[0] : undefined)
        }
      />
      <label htmlFor={name}>
        <div className="input--file__label">{label}</div>
        <div className="input--file__filename">
          {file ? file.name : noneAttachedMsg ?? "No files attached"}
        </div>
        <div className="input--file__icon">
          <MaterialIcon icon="attach_file" allowCustomSize />
        </div>
      </label>

      {/* Helper message */}
      {helperMsg && <span className="input__helper">{helperMsg}</span>}
    </div>
  );
};

export default FileInput;
