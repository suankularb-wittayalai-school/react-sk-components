// Modules
import { ReactNode } from "react";

// Types
import { SKComponent } from "../../utils/types";

export interface XScrollContentProps extends SKComponent {
  children: ReactNode;
}

/**
 * Content in X Scroll Content, which should be <li> of Cards, is put into a row and scrolls horizontally
 */
const XScrollContent = ({ children }: XScrollContentProps): JSX.Element => (
  <div className="x-scroll-content">
    <ul className="x-scroll-content__content">{children}</ul>
  </div>
);

export default XScrollContent;
