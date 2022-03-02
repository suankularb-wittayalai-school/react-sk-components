// Modules
import React, { ReactNode } from "react";

export interface CardActionsProps {
  children: ReactNode;
}

/**
 * Buttons at the bottom of Card
 */
const CardActions = ({ children }: CardActionsProps): JSX.Element => (
  <div className="card__actions">{children}</div>
);

export default CardActions;
