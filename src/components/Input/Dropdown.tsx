// Modules
import React, { useState } from "react";

const Dropdown = (): JSX.Element => {
  const [showList, setShowList] = useState<boolean>(false);

  return (
    <div className={`dropdown ${showList ? "show" : ""}`}>
      <button
        aria-haspopup="listbox"
        className="dropdown__button"
        onClick={() => setShowList(!showList)}
        role="combobox"
      >
        <span>Selected Item</span>
        <i className="icon dropdown__icon">expand_more</i>
      </button>

      <div className="dropdown__options" role="listbox">
        <button aria-selected="false" role="option">
          Item 1
        </button>
        <button aria-selected="true" role="option" className="selected">
          Selected Item
        </button>
        <button aria-selected="false" role="option">
          Item 3
        </button>
        <button aria-selected="false" role="option">
          Item 4
        </button>
      </div>

      <div className="dropdown__label">Label</div>
    </div>
  );
};

export default Dropdown;
