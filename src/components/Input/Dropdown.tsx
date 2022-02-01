// Modules
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

// Components
import MaterialIcon from "@components/Icon/MaterialIcon";

// Type
import { DropdownOption as DropdownOptionType } from "@utils/types/input";

// Utils
import { animationTransition } from "@utils/animations/config";

/**
 * Displays the options for the dropdown
 */
const DropdownOptions = ({
  options,
  noShowSelected,
  selectedItemValue,
  optionOnClick,
  noOptionsText,
}: {
  options: Array<DropdownOptionType>;
  noShowSelected: boolean;
  selectedItemValue: any;
  optionOnClick: (optionValue: any) => void;
  noOptionsText?: string;
}) => (
  <div className="dropdown__options" role="listbox">
    {options.length == 0 ? (
      <button disabled>{noOptionsText || "No options"}</button>
    ) : (
      options.map((option) =>
        noShowSelected && selectedItemValue === option.value ? (
          <button aria-selected="true" className="selected" role="option">
            {option.label}
          </button>
        ) : (
          <button
            aria-selected="false"
            onClick={() => optionOnClick(option.value)}
            role="option"
          >
            {option.label}
          </button>
        )
      )
    )}
  </div>
);

export interface DropdownProps {
  name: string;
  label: string;
  options: Array<DropdownOptionType>;
  placeholder?: string;
  noOptionsText?: string;
  icon?: { expandMore: JSX.Element; expandLess: JSX.Element };
}

/**
 * A custom but accessible Dropdown
 * @param name Used for ID
 * @param label The display label/placeholder
 * @param options An array of options for the Dropdown Options
 * @param placeholder Displays when the user hasn’t selected
 * @param noOptionsText Displays when there is no options
 */
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
      {/* This button toggles the Dropdown Options */}
      <button
        aria-expanded={showList}
        aria-haspopup="listbox"
        className="dropdown__button"
        onClick={() => setShowList(!showList)}
        role="combobox"
      >
        <span>
          {
            // Displays placeholder if placeholder exists until the user selects an option
            // If not, the first option or noOptionsText is displayed
            hasBeenSelected || !placeholder
              ? options.length == 0
                ? noOptionsText || "No options"
                : options.find((option) => selectedItemValue === option.value)
                    ?.label || placeholder
              : placeholder
          }
        </span>

        <div className="dropdown__icon">
          {showList
            ? icon?.expandLess || <MaterialIcon icon="expand_less" />
            : icon?.expandMore || <MaterialIcon icon="expand_more" />}
        </div>
      </button>

      <AnimatePresence>
        {showList && (
          <motion.div
            className="dropdown__options"
            key="dropdown-options"
            role="listbox"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={{
              hidden: { y: -20, opacity: 0 },
              enter: { y: 0, opacity: 1 },
              exit: { y: -20, opacity: 0 },
            }}
            transition={animationTransition}
          >
            {options.length == 0 ? (
              <button disabled>{noOptionsText || "No options"}</button>
            ) : (
              <DropdownOptions
                options={options}
                noShowSelected={hasBeenSelected}
                selectedItemValue={selectedItemValue}
                optionOnClick={(optionValue) => {
                  if (!hasBeenSelected) {
                    setHasBeenSelected(true);
                  }
                  setSelectedItemValue(optionValue);
                  setShowList(false);
                }}
                noOptionsText={noOptionsText}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <label className="dropdown__label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Dropdown;
