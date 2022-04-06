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
 * @param selected The default state of this Chip
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
}: InputChipProps) => {
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
      {typeof name == "string" ? <span>{name}</span> : name}
      <button className="chip__icon--btn" onClick={() => onClose && onClose()}>
        <MaterialIcon icon="close" />
      </button>
    </li>
  );
};

export default InputChip;
