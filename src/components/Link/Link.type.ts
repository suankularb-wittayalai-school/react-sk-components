// Types
import { LinkElement } from "@utils/types";

export interface LinkProps {
  name: string;
  type: "filled" | "outlined" | "text";
  icon?: JSX.Element;
  url: string;
  LinkElement?: LinkElement;
  style?: React.CSSProperties;
  attr?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}
