// Types
import { classNames } from "../../utils/helpers/elements";
import { SKComponent } from "../../utils/types";

export interface MaterialIconProps extends SKComponent {
  icon: string;
  type?: "filled" | "outlined";
  allowCustomSize?: boolean;
}

/**
 * A font implementation of Google’s Material Symbols
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
    className={classNames([
      "icon",
      type == "filled" && "icon--filled",
      allowCustomSize && "icon--custom-size",
      className,
    ])}
    style={style}
    translate="no"
  >
    {icon}
  </i>
);

export default MaterialIcon;
