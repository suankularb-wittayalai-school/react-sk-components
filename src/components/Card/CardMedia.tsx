// Modules
import { ReactNode } from "react";

// Types
import { SKComponent } from "../../utils/types";

export interface CardMediaProps extends SKComponent {
  children: ReactNode;
}

const CardMedia = ({
  children,
  className,
  style,
}: CardMediaProps): JSX.Element => (
  <div className={`card__media ${className}`} style={style}>
    {children}
  </div>
);

export default CardMedia;
