// Modules
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

// Components
import MaterialIcon from "../Icon";

// Type
import {
  SKComponent,
  DropdownOption as DropdownOptionType,
} from "../../utils/types";

// Utils
import { animationTransition } from "../../utils/animations/config";

/**
 * Displays the options for the dropdown
 */
const DropdownOptions = ({
  options,
  selectedItemValue,
  optionOnClick,
  noOptionsText,
}: {
  options: Array<DropdownOptionType>;
  selectedItemValue: any;
  optionOnClick: (optionValue: any) => void;
  noOptionsText?: string;
}) => (
  <>
    {options.length == 0 ? (
      <button disabled>{noOptionsText || "No options"}</button>
    ) : (
      options.map((option) =>
        selectedItemValue === option.value ? (
          <button
            aria-selected="true"
            className="selected"
            key={option.value}
            role="option"
            tabIndex={-1}
          >
            {option.label}
          </button>
        ) : (
          <button
            aria-selected="false"
            key={option.value}
            onClick={() => optionOnClick(option.value)}
            role="option"
            tabIndex={-1}
          >
            {option.label}
          </button>
        )
      )
    )}
  </>
);

export interface DropdownProps extends SKComponent {
  name: string;
  label: string;
  options: Array<DropdownOptionType>;
  placeholder?: string;
  helperMsg?: string;
  noOptionsText?: string;
  icon?: { expandMore: JSX.Element; expandLess: JSX.Element };
  onChange?: Function;
  defaultValue?: DropdownOptionType["value"];
}

/**
 * A custom but accessible Dropdown
 * @param name Used for ID
 * @param label The display label/placeholder
 * @param options An array of options for the Dropdown Options
 * @param placeholder Displays when the user hasn’t selected
 * @param noOptionsText Displays when there is no options
 * @param onChange Triggerd when the selected option changes
 */
const Dropdown = ({
  name,
  label,
  options,
  placeholder,
  noOptionsText,
  helperMsg,
  icon,
  onChange,
  defaultValue,
  className,
  style,
}: DropdownProps): JSX.Element => {
  // If Dropdown Options is shown
  const [showList, setShowList] = useState<boolean>(false);

  // If the user has selected an Option
  const [showSelected, setShowSelected] = useState<boolean>(
    defaultValue ? true : false
  );
  // The value of the selected Option, use `defaultValue` as default if provided, otherwise use first option
  const [selectedItemValue, setSelectedItemValue] = useState<
    DropdownOptionType["value"]
  >(
    defaultValue && options.find((option) => option.value)
      ? defaultValue
      : options.length > 0
      ? options[0].value
      : undefined
  );

  // The value of the selected Option, use `defaultValue` as default if provided, otherwise use first option
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(
    defaultValue
      ? options.findIndex((option) => defaultValue == option.value)
      : 0
  );

  // Handles keyboard navigation
  const [listeningForKeys, setListeningForKeys] = useState<boolean>(false);
  const [currKeyCode, setCurrKeyCode] = useState<"up" | "down">();

  useEffect(() => {
    if (onChange) onChange(selectedItemValue);
    setSelectedItemIndex(
      options.findIndex((option) => selectedItemValue == option.value)
    );
  }, [selectedItemValue]);

  // Listens for key presses
  useHotkeys("up", () => setCurrKeyCode("up"));
  useHotkeys("down", () => setCurrKeyCode("down"));

  // Keyboard navigation logic
  useEffect(() => {
    if (listeningForKeys) {
      if (!showList) setShowList(true);

      switch (currKeyCode) {
        case "up":
          if (selectedItemIndex == 0)
            setSelectedItemValue(options[options.length - 1].value);
          else setSelectedItemValue(options[selectedItemIndex - 1].value);
          break;

        case "down":
          if (selectedItemIndex == options.length - 1)
            setSelectedItemValue(options[0].value);
          else setSelectedItemValue(options[selectedItemIndex + 1].value);
          break;
      }

      setCurrKeyCode(undefined);
    }
  }, [currKeyCode]);

  // Renders Dropdown
  return (
    <div
      className={`dropdown ${showList ? "show" : ""} ${className || ""}`}
      style={style}
    >
      {/* This button toggles the Dropdown Options */}
      <button
        aria-expanded={showList}
        aria-haspopup="listbox"
        className="dropdown__button"
        onClick={() => setShowList(!showList)}
        onFocus={() => setListeningForKeys(true)}
        onBlur={() => setListeningForKeys(false)}
        role="combobox"
      >
        <span>
          {
            // Displays placeholder if placeholder exists until the user selects an option
            // If not, the first option or noOptionsText is displayed
            showSelected || !placeholder
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

      {/* Dropdown Options */}
      <AnimatePresence>
        {showList && (
          <motion.div
            className="dropdown__options"
            key={`${name}-dropdown-options`}
            role="listbox"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={animationTransition}
          >
            {options.length == 0 ? (
              <button disabled>{noOptionsText || "No options"}</button>
            ) : (
              <DropdownOptions
                options={options}
                selectedItemValue={selectedItemValue}
                optionOnClick={(optionValue) => {
                  if (!showSelected) {
                    setShowSelected(true);
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

      {/* Dropdown Label */}
      <label className="dropdown__label" htmlFor={name}>
        {label}
      </label>

      {/* Helper message */}
      {helperMsg && <span className="input__helper">{helperMsg}</span>}
    </div>
  );
};

export default Dropdown;
