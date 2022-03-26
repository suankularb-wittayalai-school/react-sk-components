// Modules
import { ReactNode } from "react";

// Types
import { SKComponent } from "../../../utils/types";

export interface ListLayoutProps extends SKComponent {
  Title: JSX.Element;
  children: ReactNode;
}

/**
 * The complete layout for List Layout
 *
 * Its children must consist of `ListSection` and `MainSection`
 *
 * @param Title Title element
 */
const ListLayout = ({ Title, className, style, children }: ListLayoutProps) => {
  const TitleElement = () => Title;

  return (
    <>
      <TitleElement />
      <main className={`content-layout--list ${className || ""}`} style={style}>
        <div className="content-layout__content">{children}</div>
      </main>
    </>
  );
};

export default ListLayout;
