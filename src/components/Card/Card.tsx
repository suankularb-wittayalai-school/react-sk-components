// Modules
import React, { ReactNode } from "react";

export interface CardProps {
  type: "horizontal" | "stacked";
  appearance?: "outlined" | "elevated" | "tonal";
  children: ReactNode;
}

const Card = ({ type, appearance, children }: CardProps): JSX.Element => (
  <div
    className={`${type == "stacked" ? "card--stacked" : "card--horizontal"} ${
      appearance == "elevated"
        ? "card--elevated"
        : appearance == "tonal"
        ? "card--tonal"
        : "card--outlined"
    }`}
  >
    {children}
  </div>
);

export default Card;
