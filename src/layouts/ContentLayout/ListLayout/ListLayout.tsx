// Modules
import React, { ReactNode } from "react";

// Components
import Header from "../../../components/Header";

// Types
import { HeaderProps } from "../../../components/Header/Header";

export interface ListLayoutProps {
  header: HeaderProps;
  children: ReactNode;
}

/**
 * The complete layout for List Layout, contains List Section and Main Section
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

      <main className="content-layout--list">
        {children}
      </main>
    </>
  );
};

export default ListLayout;
