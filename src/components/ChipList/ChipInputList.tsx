// Modules
import { useEffect, useState } from "react";

// Components
import Chip from "../Chip/Chip";
import ChipList from "./ChipList";
import MaterialIcon from "../Icon/MaterialIcon";

export interface Choice {
  id: string;
  name: string | JSX.Element;
}

export interface ChipFilterListProps {
  list: Array<Choice>;
  onChange?: Function;
  scrollable?: boolean;
  noWrap?: boolean;
}

/**
 * A list of Filter Chips and Chip Radio Groups that the user can choose many from
 * @param list An array of choices the user has entered
 * @param onChange Triggered when the selected Chips change
 * @param scrollable If true, Chip List will fill the width and scroll
 * @param noWrap Disables wrapping when the width is too small, is *not* needed if `scrollable` is true
 */
const ChipInputList = ({
  list,
  onChange,
  scrollable,
  noWrap,
}: ChipFilterListProps): JSX.Element => {
  return (
    <ChipList scrollable={scrollable} noWrap={noWrap}>
      {list.map((listItem, index) => (
        <Chip
          key={index}
          name={listItem.name}
          trailingIcon={<MaterialIcon icon="close" />}
        />
      ))}
    </ChipList>
  );
};

export default ChipInputList;
