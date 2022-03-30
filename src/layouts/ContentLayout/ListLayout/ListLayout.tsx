// Modules
import { ReactNode } from "react";

// Types
import { SKComponent } from "../../../utils/types";

export interface ListLayoutProps extends SKComponent {
  Title?: JSX.Element;
  show: Boolean;
  children: ReactNode;
}

/**
 * The complete layout for List Layout
 *
 * Its children must consist of `ListSection` and `MainSection`
 *
 * @param Title Title element
 * @param show If the Main Section is currently visible on mobile or not 
 */
const ListLayout = ({
  Title,
  show,
  children,
  className,
  style,
}: ListLayoutProps) => (
  <>
    {Title && Title}
    <main
      className={`content-layout--list ${show ? "show" : ""} ${
        className || ""
      }`}
      style={style}
    >
      <div className="content-layout__overlay" />
      <div className="content-layout__content">{children}</div>
    </main>
  </>
);

export default ListLayout;
