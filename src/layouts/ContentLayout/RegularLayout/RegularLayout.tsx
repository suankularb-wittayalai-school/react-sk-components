// Modules
import React, { ReactNode } from "react";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

export interface RegularLayoutProps {
  Header: () => JSX.Element;
  children: ReactNode;
}

/**
 * Transforms Markdown into a Content Layout
 * 
 * @param Header Header element
 */
const RegularLayout = ({ Header, children }: RegularLayoutProps) => (
  <>
    <Header />
    <main className="content-layout markdown">{children}</main>
  </>
);

export default RegularLayout;
