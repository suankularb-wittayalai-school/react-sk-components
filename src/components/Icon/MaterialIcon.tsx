// Modules
import React from "react";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

export interface MaterialIconProps {
  icon: string;
  type?: "filled" | "outlined";
  className?: string;
  style?: React.CSSProperties;
}

/**
 * A font implementation of Google’s Material Design Icons
 * @param icon The icon text as seen in [Google Fonts](https://fonts.google.com/icons)
 * @param type `"filled" | "outlined"`
 */
const MaterialIcon = ({ icon, type, className, style }: MaterialIconProps) => (
  <i
    className={`${type == "outlined" ? "icon--outlined" : "icon"} ${className}`}
    style={style}
  >
    {icon}
  </i>
);

export default MaterialIcon;
