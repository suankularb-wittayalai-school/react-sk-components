// Modules
import React, { ReactNode } from "react";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

export interface RegularLayoutProps {
  Title: () => JSX.Element;
  children: ReactNode;
}

/**
 * Transforms Markdown into a Content Layout
 * 
 * @param Title Title element
 */
const RegularLayout = ({ Title, children }: RegularLayoutProps) => (
  <>
    <Title />
    <main className="content-layout markdown">{children}</main>
  </>
);

export default RegularLayout;
