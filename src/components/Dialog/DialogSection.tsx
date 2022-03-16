import { ReactNode } from "react";

export interface DialogSectionProps {
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
}: DialogSectionProps): JSX.Element => (
  <section className="dialog__section" aria-labelledby={name}>
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
