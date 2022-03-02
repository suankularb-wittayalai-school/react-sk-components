// Modules
import React, { ReactNode } from "react";

export interface CardSupportingTextProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
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
