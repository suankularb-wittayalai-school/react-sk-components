// Modules
import { ReactNode } from "react";

// Types
import { SKComponent } from "../../../utils/types";

export interface RegularLayoutProps extends SKComponent {
  Title: JSX.Element;
  children: ReactNode;
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
