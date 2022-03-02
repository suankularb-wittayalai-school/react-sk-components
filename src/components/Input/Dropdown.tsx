// Modules
import { Listbox } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { Fragment, useState } from "react";

// Components
import { MaterialIcon } from "..";

// Utils
import { animationTransition } from "../../utils/animations/config";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

export interface DropdownProps {
  options: Array<{
    name: string;
  }>;
}

const Dropdown = ({ options }: DropdownProps): JSX.Element => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="dropdown">
        <Listbox.Button className="dropdown__button">
          <span>{selected.name}</span>
          <div className="dropdown__icon">
            <MaterialIcon icon="expand_more" />
          </div>
        </Listbox.Button>
        <div className="dropdown__label">Language</div>
        <AnimatePresence>
          <motion.div
            key="dropdown-options"
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
            <Listbox.Options className="dropdown__options">
              {options.map((option, index) => (
                <Listbox.Option
                  key={index}
                  className={({ selected }) => (selected ? "selected" : "")}
                  value={option}
                >
                  {option.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </motion.div>
        </AnimatePresence>
      </div>
    </Listbox>
  );
};

export default Dropdown;
