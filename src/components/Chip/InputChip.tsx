// Types
import { ChipProps } from "./Chip";

/**
 * A Chip that can be toggled on and off
 * @param name The text to display inside the Chip
 * @param appearance How the Chip looks, can be either "regular" (default) or "elevated"
 * @param selected The default state of this Chip
 * @param avatar A circular image leading the Chip
 * @param leadingIcon The Icon to the left of the Chip
 */
const InputChip = ({
  name,
  appearance,
  avatar,
  leadingIcon,
  className,
  style,
}: ChipProps) => {
  return (
    <li
      className={`input-chip ${
        leadingIcon
          ? "chip--has-leading-icon"
          : avatar
          ? "chip--has-avatar"
          : ""
      } ${appearance == "elevated" ? "chip--elevated" : ""} ${className || ""}`}
      style={style}
    >
      {avatar && <div className="chip__avatar">{avatar}</div>}
      {leadingIcon && <div className="chip__icon">{leadingIcon}</div>}
      <span>{name}</span>
    </li>
  );
};

export default InputChip;
