// Modules
import { ReactNode } from "react";

// Types
import { SKComponent } from "../../../utils/types";

export interface ListSectionProps extends SKComponent {
  children: ReactNode;
}

/**
 * The left section of List Layout where Card List should live
 */
const ListSection = ({ children, className, style }: ListSectionProps) => {
  return (
    <section
      className={`content-layout__list-section ${className || ""}`}
      style={style}
    >
      {children}
    </section>
  );
};

export default ListSection;
