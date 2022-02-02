// Modules
import { ReactNode } from "react";

// Types
import { HeaderProps } from "@components/Header/Header.types";

export interface ListLayoutProps {
  header: HeaderProps;
  listGroups: Array<{ groupName: string; content: Array<{}> }>;
  ItemElement: ({
    className,
    content,
  }: {
    className: string;
    content: {};
  }) => JSX.Element;
  ActiveItemElement: ({ content }: { content: any }) => JSX.Element;
  fetchItem: Function;
  defaultActiveID?: number;
}

export interface RegularLayoutProps {
  header: HeaderProps;
  children: ReactNode;
}