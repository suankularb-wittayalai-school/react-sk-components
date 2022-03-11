// Modules
import { useEffect, useState } from "react";

// Components
import Chip from "../Chip/Chip";
import ChipList from "./ChipList";
import ChipRadioGroup from "./ChipRadioGroup";
import MaterialIcon from "../Icon/MaterialIcon";

export interface Choice {
  id: string;
  name: string;
}

export interface ChipFilterListProps {
  choices: Array<Choice | Array<Choice>>;
  onChange?: Function;
  scrollable?: boolean;
  noWrap?: boolean;
}

/**
 * A list of Filter Chips and Chip Radio Groups that the user can choose many from
 * @param choices An array of choices the user can choose from, include an array inside this array for a Chip Radio Group
 * @param onChange Triggered when the selected Chips change
 * @param scrollable If true, Chip List will fill the width and scroll
 * @param noWrap Disables wrapping when the width is too small, is *not* needed if `scrollable` is true
 */
const ChipFilterList = ({
  choices,
  onChange,
  scrollable,
  noWrap,
}: ChipFilterListProps): JSX.Element => {
  const [selectedIDs, setSelectedIDs] = useState<Array<string>>([]);

  useEffect(() => {
    if (onChange) onChange(selectedIDs);
  }, [selectedIDs]);

  function toggleSelectedID(id: string) {
    if (selectedIDs.includes(id)) {
      setSelectedIDs(selectedIDs.filter((item) => item != id));
    } else {
      setSelectedIDs([...selectedIDs, id]);
    }
  }

  return (
    <ChipList scrollable={scrollable} noWrap={noWrap}>
      {choices.map((choice, index) =>
        choice instanceof Array ? (
          <ChipRadioGroup
            key={index}
            choices={choice}
            onChange={(id: string) => toggleSelectedID(id)}
          />
        ) : (
          <Chip
            key={index}
            name={choice.name}
            selected={selectedIDs.includes(choice.id)}
            leadingIcon={
              selectedIDs.includes(choice.id) ? (
                <MaterialIcon icon="done" />
              ) : undefined
            }
            onClick={() => toggleSelectedID(choice.id)}
          />
        )
      )}
    </ChipList>
  );
};

export default ChipFilterList;
