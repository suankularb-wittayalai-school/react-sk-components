import { ReactNode } from "react";

export interface DialogSectionProps {
  name: string;
  textElement?: JSX.Element;
  isLarge?: boolean;
  children: ReactNode;
}

const DialogSection = ({
  name,
  textElement,
  isLarge,
  children,
}: DialogSectionProps): JSX.Element => (
  <section className="dialog__section" aria-labelledby={name}>
    {/* Header */}
    <h2 id={name}>{textElement ? textElement : name}</h2>

    {/* Content */}
    {isLarge ? <div className="dialog__columns">{children}</div> : children}
  </section>
);

export default DialogSection;
