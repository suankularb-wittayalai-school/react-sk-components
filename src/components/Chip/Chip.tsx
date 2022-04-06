// Types
import { SKComponent } from "../../utils/types";

export interface ChipProps extends SKComponent {
  name: string | JSX.Element;
  appearance?: "regular" | "elevated";
  selected?: boolean;
  leadingIcon?: JSX.Element;
  trailingIcon?: JSX.Element;
  avatar?: JSX.Element;
  onClick?: Function;
}

/**
 * Chips help people enter information, make selections, filter content, or trigger actions
 * @param name The text to display inside the Chip
 * @param appearance How the Chip looks, can be either "regular" (default) or "elevated"
 * @param selected If the Chip is selected or not, a selected Chip will be filled
 * @param avatar A circular image leading the Chip
 * @param leadingIcon The Icon to the left of the Chip
 * @param trailingIcon The Icon to the right of the Chip
 * @param onClick Triggered when the Chip is clicked
 */
const Chip = ({
  name,
  appearance,
  selected,
  avatar,
  leadingIcon,
  trailingIcon,
  onClick,
  className,
  style,
}: ChipProps): JSX.Element => (
  <button
    className={`${
      leadingIcon && trailingIcon
        ? "chip--has-icons"
        : avatar && trailingIcon
        ? "chip--has-avatar-and-icon"
        : leadingIcon
        ? "chip--has-leading-icon"
        : trailingIcon
        ? "chip--has-trailing-icon"
        : avatar
        ? "chip--has-avatar"
        : "chip"
    } ${selected ? "selected" : ""} ${
      appearance == "elevated" ? "chip--elevated" : ""
    } ${className || ""}`}
    style={style}
    onClick={() => {
      if (onClick) onClick();
    }}
  >
    {avatar && <div className="chip__avatar">{avatar}</div>}
    {leadingIcon && <div className="chip__icon">{leadingIcon}</div>}
    {typeof name == "string" ? <span>{name}</span> : name}
    {trailingIcon && <div className="chip__icon">{trailingIcon}</div>}
  </button>
);

export default Chip;
