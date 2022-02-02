// Types
import { LinkElement } from "@utils/types";

export interface HeaderProps {
  name: { title: string; subtitle?: string };
  pageIcon: JSX.Element | string;
  backGoesTo: string;
  backIcon?: JSX.Element;
  LinkElement?: LinkElement;
  className?: string;
  style?: React.CSSProperties;
}
