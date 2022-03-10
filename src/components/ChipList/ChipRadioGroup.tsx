// Modules
import { useState } from "react";

// Components
import Chip from "../Chip/Chip";
import MaterialIcon from "../Icon/MaterialIcon";

export interface Choice {
  id: string;
  name: string;
}

export interface ChipRadioGroupProps {
  choices: Array<Choice>;
  onChange?: Function;
  value?: string;
}

const ChipRadioGroup = ({
  choices,
  onChange,
  value,
}: ChipRadioGroupProps): JSX.Element => {
  const [selectedID, setSelectedID] = useState<string | undefined>(value);

  return (
    <div className="chip-list--radio">
      {choices.map((choice) => (
        <Chip
          name={choice.name}
          selected={selectedID == choice.id}
          leadingIcon={
            selectedID == choice.id ? <MaterialIcon icon="done" /> : undefined
          }
        />
      ))}
    </div>
  );
};

export default ChipRadioGroup;
