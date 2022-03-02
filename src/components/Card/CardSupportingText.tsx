// Modules
import React, { ReactNode } from "react";

export interface CardSupportingTextProps {
  children: ReactNode;
}

/**
 * Some content that supports the title of this Card
 */
const CardSupportingText = ({
  children,
}: CardSupportingTextProps): JSX.Element => (
  <div className="card__supporting-text">{children}</div>
);

export default CardSupportingText;
