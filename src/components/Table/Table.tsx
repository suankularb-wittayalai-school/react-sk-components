// Module
import { ReactNode } from "react";

// Types
import { SKComponent } from "../../utils/types";

export interface TableProps extends SKComponent {
  type?: "outlined" | "elevated";
  width?: number;
  children: ReactNode;
}

/**
 * Table reacts to small screens by letting its content scroll once Table is smaller that the minimum width
 * @param type "outlined" | "elevated"
 * @param width The minimum width of the table content
 */
const Table = ({
  type,
  width,
  className,
  style,
  children,
}: TableProps): JSX.Element => (
  <div
    className={`${
      type == "elevated"
        ? "table__wrapper--elevated"
        : "table__wrapper--outlined"
    } ${className || ""}`}
    style={style}
  >
    <table className="table" style={{ minWidth: width }}>
      {children}
    </table>
  </div>
);

export default Table;
