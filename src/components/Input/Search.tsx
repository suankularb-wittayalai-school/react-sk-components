// Modules
import { useEffect, useState } from "react";

// Types
import { SKComponent } from "../../utils/types";

export interface SearchProps extends SKComponent {
  placeholder?: string;
  onChange?: (e: string) => void;
  onSubmit?: (e: string) => void;
}

/**
 * A place for the user to search for something
 * @param placeholder Placeholder text, disappears when user starts typing
 */
const Search = ({
  placeholder,
  onChange,
  onSubmit,
  className,
  style,
}: SearchProps) => {
  const [query, setQuery] = useState<string>("");

  useEffect(() => onChange && onChange(query), [query]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`search ${className || ""}`}
      style={style}
    >
      <button
        className="search__button"
        onClick={() => onSubmit && onSubmit(query)}
      >
        <i className="icon search__icon" translate="no">
          search
        </i>
      </button>
      <input
        type="search"
        className="search__input"
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder || "Search"}
      />
    </form>
  );
};

export default Search;
