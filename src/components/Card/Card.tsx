// Modules
import { ReactNode } from "react";

export interface CardProps {
  type: "horizontal" | "stacked";
  appearance?: "outlined" | "elevated" | "tonal";
  hasAction?: boolean;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Card = ({
  type,
  appearance,
  hasAction,
  children,
  className,
  style,
}: CardProps): JSX.Element => (
  <div
    className={`${type == "stacked" ? "card--stacked" : "card--horizontal"} ${
      appearance == "elevated"
        ? "card--elevated"
        : appearance == "tonal"
        ? "card--tonal"
        : "card--outlined"
    } ${
      hasAction ? "card--has-action" : ""
    } ${className || ""}`}
    style={style}
  >
    {children}
  </div>
);

export default Card;
