// Modules
import React, { ReactNode } from "react";

const RegularLayout = ({ children }: { children: ReactNode }) => (
  <main className="content-layout">
    {children}
  </main>
);

export default RegularLayout;
