// Modules
import { ReactNode } from "react";

export interface ChipListProps {
  scrollable?: boolean;
  noWrap?: boolean;
  children: ReactNode;
}

/**
 * A list of Chips
 * @param scrollable If true, Chip List will fill the width and scroll
 * @param noWrap Disables wrapping when the width is too small, is *not* needed if `scrollable` is true
 */
const ChipList = ({ scrollable, noWrap, children }: ChipListProps): JSX.Element =>
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
