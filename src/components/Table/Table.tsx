import React, { ReactNode } from "react";

export interface TableProps {
  type?: "outlined" | "elevated";
  width?: number;
  children: ReactNode;
}

const Table = ({ type, width, children }: TableProps): JSX.Element => (
  <div
    className={
      type == "elevated"
        ? "table__wrapper--elevated"
        : "table__wrapper--outlined"
    }
  >
    <table className="table" style={{ width: width }}>
      {children}
    </table>
  </div>
);

export default Table;
