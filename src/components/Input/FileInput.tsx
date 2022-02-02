// Modules
import React, { useEffect, useState } from "react";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

// Types
import { FileInputProps } from "@components/Input/Input.types";

/**
 * File Input accepts one file and displays it
 * @param name Used for ID
 * @param label The display label
 */
const FileInput = ({ name, label, onChange }: FileInputProps) => {
  const [file, setFile] = useState<File>();

  useEffect(() => onChange && onChange(file), [file]);

  return (
    <div className="input--file">
      <input
        id={name}
        type="file"
        onChange={(e) =>
          setFile(e.target.files ? e.target.files[0] : undefined)
        }
      />
      <label htmlFor={name}>
        <div className="input--file__label">{label}</div>
        <div className="input--file__filename">
          {file ? file.name : "No files attached"}
        </div>
        <i className="icon input--file__icon">attach_file</i>
      </label>
    </div>
  );
};

export default FileInput;
