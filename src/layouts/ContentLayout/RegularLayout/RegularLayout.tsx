// Modules
import React, { ReactNode } from "react";

// Components
import Header from "../../../components/Header";

// Types
import { HeaderProps } from "../../../components/Header/Header";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

export interface RegularLayoutProps {
  header: HeaderProps;
  children: ReactNode;
}

/**
 * Transforms Markdown into a Content Layout
 */
const RegularLayout = ({ header, children }: RegularLayoutProps) => (
  <>
    {/* Header */}
    <Header
      name={header.name}
      pageIcon={header.pageIcon}
      backGoesTo={header.backGoesTo}
      backIcon={header.backIcon}
      LinkElement={header.LinkElement}
      className={header.className}
      style={header.style}
    />

    {/* Content */}
    <main className="content-layout markdown">{children}</main>
  </>
);

export default RegularLayout;
