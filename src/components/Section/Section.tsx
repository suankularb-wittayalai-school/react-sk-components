// Modules
import { ReactNode } from "react";

interface SectionProps {
  labelledBy?: string;
  children: ReactNode;
}

/**
 * A section of Regular Component
 * @param labelledBy The ID of this section’s Header
 */
const Section = ({ labelledBy, children }: SectionProps): JSX.Element => (
  <section aria-labelledby={labelledBy} className="section">
    {children}
  </section>
);

export default Section;
