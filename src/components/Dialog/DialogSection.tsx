// Modules
import { ReactNode } from "react";

// Types
import { SKComponent } from "../../utils/types";

export interface DialogSectionProps extends SKComponent {
  name: string;
  textElement?: JSX.Element;
  isDoubleColumn?: boolean;
  children: ReactNode;
}

/**
 * A section of content inside Dialog
 * @param name The title of this section
 * @param textElement If the header is an element, use this param
 * @param isDoubleColumn Splits the content into a 2-column grid
 */
const DialogSection = ({
  name,
  textElement,
  isDoubleColumn,
  children,
  className,
  style,
}: DialogSectionProps): JSX.Element => (
  <section
    aria-labelledby={name}
    className={`dialog__section ${className}`}
    style={style}
  >
    {/* Header */}
    <h2 id={name}>{textElement ? textElement : name}</h2>

    {/* Content */}
    {isDoubleColumn ? (
      <div className="dialog__columns">{children}</div>
    ) : (
      children
    )}
  </section>
);

export default DialogSection;
