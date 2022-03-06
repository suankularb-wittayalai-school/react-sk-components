// Modules
import React, { ReactNode } from "react";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

export interface ListLayoutProps {
  Title: () => JSX.Element;
  children: ReactNode;
}

/**
 * The complete layout for List Layout
 *
 * Its children must consist of `ListSection` and `MainSection`
 *
 * @param Title Title element
 */
const ListLayout = ({ Title, children }: ListLayoutProps) => {
  return (
    <>
      <Title />
      <main className="content-layout--list">
        <div className="content-layout__content">{children}</div>
      </main>
    </>
  );
};

export default ListLayout;
