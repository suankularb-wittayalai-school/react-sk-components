// Modules
import { ReactNode } from "react";

// Types
import { SKComponent } from "../../utils/types";

export interface FABGroupProps extends SKComponent {
  children: ReactNode;
}

/**
 * A group of Floating Action Buttons
 */
const FABGroup = ({ children, className, style }: FABGroupProps) => (
  <div className={`fab-group ${className}`} style={style}>
    {children}
  </div>
);

export default FABGroup;
