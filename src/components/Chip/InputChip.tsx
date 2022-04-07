// Components
import MaterialIcon from "../Icon/MaterialIcon";

// Types
import { SKComponent } from "../../utils/types";

export interface InputChipProps extends SKComponent {
  name: string | JSX.Element;
  appearance?: "regular" | "elevated";
  leadingIcon?: JSX.Element;
  avatar?: JSX.Element;
  onClose?: Function;
}

/**
 * A Chip that can be toggled on and off
 * @param name The text to display inside the Chip
 * @param appearance How the Chip looks, can be either "regular" (default) or "elevated"
 * @param avatar A circular image leading the Chip
 * @param leadingIcon The Icon to the left of the Chip
 */
const InputChip = ({
  name,
  appearance,
  leadingIcon,
  avatar,
  onClose,
  className,
  style,
}: InputChipProps) => (
  <li
    className={`input-chip ${
      leadingIcon
        ? "chip--has-icons"
        : avatar
        ? "chip--has-avatar-and-icon"
        : "chip--has-trailing-icon"
    } ${appearance == "elevated" ? "chip--elevated" : ""} ${className || ""}`}
    style={style}
  >
    {avatar && <div className="chip__avatar">{avatar}</div>}
    {leadingIcon && <div className="chip__icon">{leadingIcon}</div>}
    {typeof name == "string" ? <span>{name}</span> : name}
    <button className="chip__icon--btn" onClick={() => onClose && onClose()}>
      <MaterialIcon icon="close" />
    </button>
  </li>
);

export default InputChip;
