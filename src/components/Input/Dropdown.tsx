// Modules
import React, { useState } from "react";

// Components
import MaterialIcon from "@components/Icon/MaterialIcon";

export interface DropdownProps {
  options: Array<{ value: any; label: string }>;
  icon?: { expandMore: JSX.Element; expandLess: JSX.Element };
}

const Dropdown = ({ options, icon }: DropdownProps): JSX.Element => {
  const [showList, setShowList] = useState<boolean>(false);
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
        onBlur={() => setShowList(false)}
        role="combobox"
      >
        <span>Selected Item</span>
        <div className="dropdown__icon">
          {showList ? (
            <MaterialIcon icon="expand_less" />
          ) : (
            <MaterialIcon icon="expand_more" />
          )}
        </div>
      </button>
      {showList && (
        <div className="dropdown__options" role="listbox">
          {options.length == 0 ? (
            <button disabled>No options</button>
          ) : (
            options.map((option) =>
              selectedItemValue === option.value ? (
                <button aria-selected="true" role="option" className="selected">
                  {option.label}
                </button>
              ) : (
                <button aria-selected="false" role="option">
                  {option.label}
                </button>
              )
            )
          )}
        </div>
      )}
      <div className="dropdown__label">Label</div>
    </div>
  );
};

export default Dropdown;
