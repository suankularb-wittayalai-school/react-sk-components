// Modules
import { useEffect, useState } from "react";

// Components
import Chip from "../Chip/Chip";
import ChipList from "./ChipList";
import ChipRadioGroup from "./ChipRadioGroup";
import MaterialIcon from "../Icon/MaterialIcon";

export interface Choice {
  id: string;
  name: string | JSX.Element;
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
  const [radioStates, setRadioStates] = useState<
    Array<{ index: number; selectedID: string }>
  >([]);

  useEffect(() => {
    if (onChange) {
      onChange(
        selectedIDs.concat(radioStates.map((radioItem) => radioItem.selectedID))
      );
    }
  }, [selectedIDs, radioStates]);

  return (
    <ChipList scrollable={scrollable} noWrap={noWrap}>
      {choices.map((choice, index) =>
        choice instanceof Array ? (
          <ChipRadioGroup
            key={index}
            choices={choice}
            onChange={async (selectedID: string | null) => {
              const thisRadioItem = radioStates.find(
                (radioItem) => radioItem.index == index
              );

              // If this Radio Group state is already on the array
              if (thisRadioItem) {
                // If the selected item changes, change the array
                if (selectedID) {
                  setRadioStates(
                    radioStates.map((radioItem) => {
                      if (index == radioItem.index)
                        radioItem.selectedID = selectedID;
                      return radioItem;
                    })
                  );
                }
                // If this Radio Group is deselected, remove from the array
                else {
                  setRadioStates(
                    radioStates.filter((radioItem) => index != radioItem.index)
                  );
                }
              } else if (selectedID) {
                // If this Radio Group state is not on the array, add it
                setRadioStates([
                  ...radioStates,
                  { index: index, selectedID: selectedID },
                ]);
              }
            }}
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
            onClick={() => {
              if (selectedIDs.includes(choice.id)) {
                setSelectedIDs(selectedIDs.filter((item) => item != choice.id));
              } else {
                setSelectedIDs([...selectedIDs, choice.id]);
              }
            }}
          />
        )
      )}
    </ChipList>
  );
};

export default ChipFilterList;
