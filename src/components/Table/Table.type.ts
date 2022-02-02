import { ReactNode } from "react";

export interface TableProps {
  type?: "outlined" | "elevated";
  width?: number;
  children: ReactNode;
}
