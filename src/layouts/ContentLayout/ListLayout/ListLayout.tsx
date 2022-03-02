// Modules
import React, { ReactNode } from "react";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

export interface ListLayoutProps {
  Header: () => JSX.Element;
  children: ReactNode;
}

/**
 * The complete layout for List Layout
 * 
 * Its children must consist of `ListSection` and `MainSection`
 * 
 * @param Header Header element
 */
const ListLayout = ({ Header, children }: ListLayoutProps) => {
  return (
    <>
      <Header />
      <main className="content-layout--list">{children}</main>
    </>
  );
};

export default ListLayout;
