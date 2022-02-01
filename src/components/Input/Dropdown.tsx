// Modules
import React, { useState } from "react";

// Components
import MaterialIcon from "@components/Icon/MaterialIcon";

export interface DropdownProps {
  name: string;
  label: string;
  options: Array<{ value: any; label: string }>;
  placeholder?: string;
  noOptionsText?: boolean;
  icon?: { expandMore: JSX.Element; expandLess: JSX.Element };
}

const Dropdown = ({
  name,
  label,
  options,
  placeholder,
  noOptionsText,
  icon,
}: DropdownProps): JSX.Element => {
  const [showList, setShowList] = useState<boolean>(false);
  const [hasBeenSelected, setHasBeenSelected] = useState<boolean>(false);
  const [selectedItemValue, setSelectedItemValue] = useState<any>(
    options.length > 0 ? options[0].value : undefined
  );

  return (
    <div className={`dropdown ${showList ? "show" : ""}`}>
      <button
        aria-expanded={showList}
        aria-haspopup="listbox"
        className="dropdown__button"
        onClick={() => setShowList(!showList)}
        role="combobox"
      >
        <span>
          {hasBeenSelected || !placeholder
            ? options.find((option) => selectedItemValue === option.value)
                ?.label || placeholder
            : placeholder}
        </span>
        <div className="dropdown__icon">
          {showList
            ? icon?.expandLess || <MaterialIcon icon="expand_less" />
            : icon?.expandMore || <MaterialIcon icon="expand_more" />}
        </div>
      </button>
      {showList && (
        <div className="dropdown__options" role="listbox">
          {options.length == 0 ? (
            <button disabled>{noOptionsText || "No options"}</button>
          ) : (
            options.map((option) =>
              hasBeenSelected && selectedItemValue === option.value ? (
                <button aria-selected="true" className="selected" role="option">
                  {option.label}
                </button>
              ) : (
                <button
                  aria-selected="false"
                  onClick={() => {
                    if (!hasBeenSelected) {
                      setHasBeenSelected(true);
                    }
                    setSelectedItemValue(option.value);
                    setShowList(false);
                  }}
                  role="option"
                >
                  {option.label}
                </button>
              )
            )
          )}
        </div>
      )}
      <label className="dropdown__label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Dropdown;
