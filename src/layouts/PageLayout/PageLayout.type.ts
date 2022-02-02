// Modules
import { ReactNode } from "react";

// Types
import { LinkElement as LinkElementType } from "@utils/types/elements";
import { NavItem } from "@utils/types/navigation";

export interface PageLayoutTypes {
  currentPath: string;
  navItems: Array<NavItem>;
  LinkElement?: LinkElementType;
  children: ReactNode;
}