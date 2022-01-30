// Modules
import React, { ReactNode } from "react";

/**
 * Transforms Markdown into a Content Layout
 */
const RegularLayout = ({ children }: { children: ReactNode }) => (
  <main className="content-layout markdown">
    {children}
  </main>
);

export default RegularLayout;
