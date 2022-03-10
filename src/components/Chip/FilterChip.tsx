// Modules
import { useState } from "react";

// Components
import Chip from "./Chip";
import MaterialIcon from "../Icon/MaterialIcon";

// Types
import { ChipProps } from "./Chip";

const FilterChip = ({
  name,
  appearance,
  selected: value,
  leadingIcon,
  trailingIcon,
  avatar,
  className,
  style,
}: ChipProps) => {
  const [selected, setSelected] = useState<boolean>(value || false);

  return (
    <Chip
      name={name}
      appearance={appearance}
      selected={selected}
      avatar={avatar}
      leadingIcon={
        leadingIcon || (selected ? <MaterialIcon icon="done" /> : undefined)
      }
      trailingIcon={trailingIcon}
      onClick={() => setSelected(!selected)}
      className={className}
      style={style}
    />
  );
};

export default FilterChip;
