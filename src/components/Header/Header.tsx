// Modules
import React from "react";

// Components
import MaterialIcon from "../Icon/MaterialIcon";

export interface HeaderProps {
  icon: string | JSX.Element;
  text: string;
}

/**
 * A level 2 Header for the Content Layout
 * @param icon Header icon
 * @param text Header text
 */
const Header = ({ icon, text }: HeaderProps): JSX.Element => (
  <div className="header">
    <div className="header__icon">
      {typeof icon == "string" ? <MaterialIcon icon={icon} /> : icon}
    </div>
    <h2>{text}</h2>
  </div>
);

export default Header;