// Modules
import React, { ReactNode } from "react";

// Components
import Header from "@components/Header";

// Types
import { HeaderProps } from "@components/Header/Header";

/**
 * Transforms Markdown into a Content Layout
 */
const RegularLayout = ({
  header,
  children,
}: {
  header: HeaderProps;
  children: ReactNode;
}) => (
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
