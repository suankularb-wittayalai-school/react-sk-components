// Modules
import { ReactNode } from "react";

export type LinkElement = ({
  href,
  children,
}: {
  href: string;
  children?: ReactNode;
}) => JSX.Element;

export type SKComponent = {
  className?: string;
  style?: React.CSSProperties;
};
