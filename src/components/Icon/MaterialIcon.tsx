import React from "react";

export interface MaterialIconProps {
  icon: string;
  type?: "filled" | "outlined";
}

const MaterialIcon = ({ icon, type }: MaterialIconProps) => (
  <i className={type == "outlined" ? "icon--outlined" : "icon"}>{icon}</i>
);

export default MaterialIcon;
