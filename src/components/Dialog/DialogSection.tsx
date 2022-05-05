// Modules
import { ReactNode } from "react";

// Types
import { SKComponent } from "../../utils/types";

export interface DialogSectionProps extends SKComponent {
  name?: string;
  title?: string;
  isDoubleColumn?: boolean;
  hasNoGap?: boolean;
  children: ReactNode;
}

/**
 * A section of content inside Dialog
 * @param name The ID of this section
 * @param title The title of this section
 * @param isDoubleColumn Splits the content into a 2-column grid
 */
const DialogSection = ({
  name,
  title,
  isDoubleColumn,
  hasNoGap,
  children,
  className,
  style,
}: DialogSectionProps): JSX.Element => (
  <section
    aria-labelledby={`${name}-header`}
    className={`dialog__section ${className}`}
    id={name}
    style={style}
  >
    {/* Header */}
    {title && <h2 id={`${name}-header`}>{title}</h2>}

    {/* Content */}
    {isDoubleColumn ? (
      <div className={hasNoGap ? "dialog__columns--no-gap" : "dialog__columns"}>
        {children}
      </div>
    ) : hasNoGap ? (
      <div>{children}</div>
    ) : (
      children
    )}
  </section>
);

export default DialogSection;
