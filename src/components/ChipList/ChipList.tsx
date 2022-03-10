// Modules
import { ReactNode } from "react";

interface ChipList {
  scrollable?: boolean;
  noWrap?: boolean;
  children: ReactNode;
}

const ChipList = ({ scrollable, noWrap, children }: ChipList): JSX.Element =>
  scrollable ? (
    <div className="x-scroll-content">
      <div className="x-scroll-content__content">
        <div className="chip-list--no-wrap">{children}</div>
      </div>
    </div>
  ) : (
    <div className={noWrap ? "chip-list--no-wrap" : "chip-list"}>
      {children}
    </div>
  );

export default ChipList;
