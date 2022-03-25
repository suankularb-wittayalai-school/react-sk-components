// Modules
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// Components
import MaterialIcon from "../Icon";

// Type
import {
  SKComponent,
  DropdownOption as DropdownOptionType,
} from "../../utils/types";

// Utils
import { animationTransition } from "../../utils/animations/config";
import { useHotkeys } from "react-hotkeys-hook";

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
          <button
            aria-selected="true"
            className="selected"
            key={option.value}
            role="option"
          >
            {option.label}
          </button>
        ) : (
          <button
            aria-selected="false"
            key={option.value}
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

export interface DropdownProps extends SKComponent {
  name: string;
  label: string;
  options: Array<DropdownOptionType>;
  placeholder?: string;
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
  icon,
  onChange,
  defaultValue,
  className,
  style,
}: DropdownProps): JSX.Element => {
  const [showList, setShowList] = useState<boolean>(false);
  const [hasBeenSelected, setHasBeenSelected] = useState<boolean>(
    defaultValue ? true : false
  );
  const [selectedItemValue, setSelectedItemValue] = useState<
    DropdownOptionType["value"]
  >(
    defaultValue
      ? defaultValue
      : options.length > 0
      ? options[0].value
      : undefined
  );
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(
    defaultValue
      ? options.findIndex((option) => defaultValue == option.value)
      : 0
  );

  // FIXME(@SiravitPhokeed): None of this works! In the callback, `selectedItemIndex` is always the default 0.

  useEffect(() => {
    if (onChange) onChange(selectedItemValue);
    setSelectedItemIndex(
      options.findIndex((option) => selectedItemValue == option.value)
    );
    console.log({
      inUseEffect: options.findIndex(
        (option) => selectedItemValue == option.value
      ),
    });
  }, [selectedItemValue]);

  function moveSelectedUp() {
    console.log({ inMoveSelectedUp: selectedItemIndex });

    if (selectedItemIndex == 0)
      setSelectedItemValue(options[options.length - 1].value);
    else setSelectedItemValue(options[selectedItemIndex - 1].value);
  }

  function moveSelectedDown() {
    if (selectedItemIndex == options.length - 1)
      setSelectedItemValue(options[0].value);
    else setSelectedItemValue(options[selectedItemIndex + 1].value);
  }

  function moveSelectedViaKey(e: KeyboardEvent) {
    switch (e.key) {
      case "ArrowUp":
        moveSelectedUp();
      case "ArrowDown":
        moveSelectedDown();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", moveSelectedViaKey);

    return () => {
      window.removeEventListener("keydown", moveSelectedViaKey);
    };
  }, []);

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
