// Modules
import { ReactNode } from "react";

// Types
import { SKComponent } from "../../utils/types";

export interface SectionProps extends SKComponent {
  labelledBy?: string;
  children: ReactNode;
}

/**
 * A section of Regular Component
 * @param labelledBy The ID of this section’s Header
 */
const Section = ({
  labelledBy,
  children,
  className,
  style,
}: SectionProps): JSX.Element => (
  <section
    aria-labelledby={labelledBy}
    className={`section ${className}`}
    style={style}
  >
    {children}
  </section>
);

export default Section;
