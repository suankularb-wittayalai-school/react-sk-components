// Modules
import React, { ReactNode } from "react"

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

export interface MainSectionProps {
  children: ReactNode;
}

/**
 * The right section of List Layout, where more details about the active List Item is displayed
 */
const MainSection = ({ children }: MainSectionProps) => (
  <div className="content-layout--list__main">{children}</div>
)

export default MainSection;