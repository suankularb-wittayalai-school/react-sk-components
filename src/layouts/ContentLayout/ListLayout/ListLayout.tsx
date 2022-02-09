// Modules
import React, { ReactNode } from "react";

// Components
import Header from "../../../components/Header";

// Types
import { HeaderProps } from "../../../components/Header/Header";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

export interface ListLayoutProps {
  header: HeaderProps;
  children: ReactNode;
}

/**
 * The complete layout for List Layout
 * 
 * Its children must consist of `ListSection` and `MainSection`
 * 
 * @param header Props for Header
 */
const ListLayout = ({ header, children }: ListLayoutProps) => {
  return (
    <>
      <Header
        name={header.name}
        pageIcon={header.pageIcon}
        backGoesTo={header.backGoesTo}
        backIcon={header.backIcon}
        LinkElement={header.LinkElement}
        className={header.className}
        style={header.style}
      />

      <main className="content-layout--list">{children}</main>
    </>
  );
};

export default ListLayout;
