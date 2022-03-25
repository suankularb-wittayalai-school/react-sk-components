// Types
import { SKComponent } from "../../utils/types";

export interface MaterialIconProps extends SKComponent {
  icon: string;
  type?: "filled" | "outlined";
  allowCustomSize?: boolean;
}

/**
 * A font implementation of Google’s Material Design Icons
 * @param icon The icon text as seen in [Google Fonts](https://fonts.google.com/icons)
 * @param type `"filled" | "outlined"`
 */
const MaterialIcon = ({
  icon,
  type,
  allowCustomSize,
  className,
  style,
}: MaterialIconProps) => (
  <i
    aria-hidden
    className={`${type == "outlined" ? "icon--outlined" : "icon"} ${
      allowCustomSize ? "icon--custom-size" : ""
    } ${className || ""}`}
    style={style}
    translate="no"
  >
    {icon}
  </i>
);

export default MaterialIcon;
