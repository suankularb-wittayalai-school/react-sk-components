// Modules
import React, { useState } from "react";

// Styles
import "suankularb-components/dist/css/suankularb-components.min.css";

/**
 * A place for the user to search for something
 * @param placeholder Placeholder text, disappears when user starts typing
 */
const Search = ({
  placeholder,
  onChange,
  onSubmit,
}: {
  placeholder?: string;
  onChange?: Function;
  onSubmit?: Function;
}) => {
  const [query, setQuery] = useState<string>("");

  return (
    <form className="search">
      <button
        className="search__button"
        onClick={(e) => {
          e.preventDefault;
          if (onSubmit) {
            onSubmit(query);
          }
        }}
      >
        <i className="icon search__icon" translate="no">
          search
        </i>
      </button>
      <input
        type="search"
        className="search__input"
        onChange={(e) => {
          setQuery(e.target.value);
          if (onChange) {
            onChange(query);
          }
        }}
        placeholder={placeholder || "Search"}
      />
    </form>
  );
};

export default Search;