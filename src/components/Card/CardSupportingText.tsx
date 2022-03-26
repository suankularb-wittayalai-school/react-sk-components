// Modules
import { ReactNode } from "react";

// Types
import { SKComponent } from "../../utils/types";

export interface CardSupportingTextProps extends SKComponent {
  children: ReactNode;
}

/**
 * Some content that supports the title of this Card
 */
const CardSupportingText = ({
  children,
  className,
  style,
}: CardSupportingTextProps): JSX.Element => (
  <div className={`card__supporting-text ${className || ""}`} style={style}>
    {children}
  </div>
);

export default CardSupportingText;
