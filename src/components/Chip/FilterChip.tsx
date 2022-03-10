// Modules
import { useState } from "react";

// Components
import Chip from "./Chip";
import MaterialIcon from "../Icon/MaterialIcon";

// Types
import { ChipProps } from "./Chip";

/**
 * A Chip that can be toggled on and off
 * @param name The text to display inside the Chip
 * @param appearance How the Chip looks, can be either "regular" (default) or "elevated"
 * @param selected The default state of this Chip
 * @param avatar A circular image leading the Chip
 * @param leadingIcon The Icon to the left of the Chip
 * @param trailingIcon The Icon to the right of the Chip
 * @param onClick Triggered when the Chip is clicked
 */
const FilterChip = ({
  name,
  appearance,
  selected: value,
  avatar,
  leadingIcon,
  trailingIcon,
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
