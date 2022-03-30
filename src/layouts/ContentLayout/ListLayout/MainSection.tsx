// Modules
import { ReactNode } from "react";

// Types
import { SKComponent } from "../../../utils/types";

export interface MainSectionProps extends SKComponent {
  children: ReactNode;
}

/**
 * The right section of List Layout, where more details about the active List Item is displayed
 */
const MainSection = ({ children, className, style }: MainSectionProps) => (
  <div
    className={className || style ? "" : "content-layout__main-section"}
    style={style}
  >
    <div className="content-layout__content">{children}</div>
  </div>
);

export default MainSection;
