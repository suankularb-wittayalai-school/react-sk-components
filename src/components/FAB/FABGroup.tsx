// Modules
import { ReactNode } from "react";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

export interface FABGroupProps {
  children: ReactNode;
}

/**
 * A group of Floating Action Buttons
 */
const FABGroup = ({ children }: FABGroupProps) => (
  <div className="fab-group">{children}</div>
);

export default FABGroup;
