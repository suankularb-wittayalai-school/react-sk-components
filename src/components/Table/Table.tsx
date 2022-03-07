// Module
import { ReactNode } from "react";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

export interface TableProps {
  type?: "outlined" | "elevated";
  width?: number;
  className?: string;
  style?: React.CSSProperties;
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
    <table className="table" style={{ width: width }}>
      {children}
    </table>
  </div>
);

export default Table;
