// Modules
import React from "react";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

// Types
import { MaterialIconProps } from "@components/Icon/Icon.type";

/**
 * A font implementation of Google’s Material Design Icons
 * @param icon The icon text as seen in [Google Fonts](https://fonts.google.com/icons)
 * @param type `"filled" | "outlined" `
 */
const MaterialIcon = ({ icon, type }: MaterialIconProps) => (
  <i className={type == "outlined" ? "icon--outlined" : "icon"}>{icon}</i>
);

export default MaterialIcon;
