// Modules
import { ReactNode } from "react";

/**
 * Divides your content into responsive columns
 * @param cols Number of columns (`2 | 3 | 4 | 6`)
 */
const LayoutGridCols = ({
  cols,
  children,
}: {
  cols: 2 | 3 | 4 | 6;
  children: ReactNode;
}): JSX.Element => {
  return <div className={`layout-grid-cols-${cols}`}>{children}</div>;
};

export default LayoutGridCols;
