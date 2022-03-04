// Modules
import React, { ReactNode } from "react";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

export interface RegularLayoutProps {
  Title: () => JSX.Element;
  children: ReactNode;
}

/**
 * A Content Layout that is fit for most pages
 *
 * @param Title Title element
 */
const RegularLayout = ({ Title, children }: RegularLayoutProps) => (
  <>
    <Title />
    <main className="content-layout">
      <div className="content-layout__content">{children}</div>
    </main>
  </>
);

export default RegularLayout;
