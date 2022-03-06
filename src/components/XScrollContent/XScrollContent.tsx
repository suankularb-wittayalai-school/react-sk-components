import React, { ReactNode } from "react";

/**
 * Content in X Scroll Content, which should be <li> of Cards, is put into a row and scrolls horizontally
 */
const XScrollContent = ({ children }: { children: ReactNode }): JSX.Element => (
  <div className="x-scroll-content">
    <ul className="x-scroll-content__content">{children}</ul>
  </div>
);

export default XScrollContent;
