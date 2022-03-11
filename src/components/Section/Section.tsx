// Modules
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

/**
 * A section of Regular Component
 */
const Section = ({ children }: SectionProps): JSX.Element => (
  <section className="section">{children}</section>
);

export default Section;
