// Modules
import { ReactNode } from "react";

// Types
import { SKComponent } from "../../utils/types";

export interface CardActionsProps extends SKComponent {
  children: ReactNode;
}

/**
 * Buttons at the bottom of Card
 */
const CardActions = ({
  children,
  className,
  style,
}: CardActionsProps): JSX.Element => (
  <div className={`card__actions ${className || ""}`} style={style}>
    {children}
  </div>
);

export default CardActions;
