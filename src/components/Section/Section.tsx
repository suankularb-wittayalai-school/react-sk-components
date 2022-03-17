// Modules
import { ReactNode } from "react";

interface SectionProps {
  labelledBy?: string;
  children: ReactNode;
}

/**
 * A section of Regular Component
 */
const Section = ({ labelledBy, children }: SectionProps): JSX.Element => (
  <section aria-labelledby={labelledBy} className="section">
    {children}
  </section>
);

export default Section;
