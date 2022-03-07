// Modules
import React, { ReactNode } from "react";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

export interface RegularLayoutProps {
  Title: JSX.Element;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * A Content Layout that is fit for most pages
 *
 * @param Title Title element
 */
const RegularLayout = ({
  Title,
  className,
  style,
  children,
}: RegularLayoutProps) => {
  const TitleElement = () => Title;

  return (
    <>
      <TitleElement />
      <main className={`content-layout ${className || ""}`} style={style}>
        <div className="content-layout__content">{children}</div>
      </main>
    </>
  );
};

export default RegularLayout;
