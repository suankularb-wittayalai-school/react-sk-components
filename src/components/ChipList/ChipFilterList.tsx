// Modules
import { useEffect, useState } from "react";

// Components
import Chip from "../Chip/Chip";
import ChipList from "./ChipList";

export interface Choice {
  id: string;
  name: string;
}

export interface ChipFilterListProps {
  choices: Array<Choice>;
  onChange?: Function;
}

const ChipFilterList = ({
  choices,
  onChange,
}: ChipFilterListProps): JSX.Element => {
  const [selectedIDs, setSelectedIDs] = useState<Array<Choice>>([]);

  useEffect(() => {
    if (onChange) onChange();
  }, [selectedIDs]);

  return (
    <ChipList>
      {choices.map((choice) => (
        <Chip name={choice.name} />
      ))}
    </ChipList>
  );
};

export default ChipFilterList;
