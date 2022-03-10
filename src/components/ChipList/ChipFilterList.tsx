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
}

const ChipFilterList = ({
  choices,
  onChange,
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
    <ChipList>
      {choices.map((choice) =>
        choice instanceof Array ? (
          <ChipRadioGroup
            choices={choice}
            onChange={(id: string) => toggleSelectedID(id)}
          />
        ) : (
          <Chip
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
