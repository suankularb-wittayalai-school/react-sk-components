// Modules
import { ReactNode } from "react";

export interface MainSectionProps {
  children: ReactNode;
}

/**
 * The right section of List Layout, where more details about the active List Item is displayed
 */
const MainSection = ({ children }: MainSectionProps) => (
  <div className="content-layout--list__main">
    <div className="content-layout__content">{children}</div>
  </div>
);

export default MainSection;
