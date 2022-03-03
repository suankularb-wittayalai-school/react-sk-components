// Modules
import React, { ReactNode } from "react";

export interface CardActionsProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
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
