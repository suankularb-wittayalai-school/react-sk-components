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
const MainSection = ({ children, className, style }: MainSectionProps) =>
  className || style ? (
    <div className="content-layout--list__main">
      <div className="content-layout__content">{children}</div>
    </div>
  ) : (
    <div className={className} style={style}>
      {children}
    </div>
  );

export default MainSection;
