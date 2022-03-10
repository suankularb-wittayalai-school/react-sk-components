// Modules
import { useEffect, useState } from "react";

// Components
import Chip from "../Chip/Chip";
import MaterialIcon from "../Icon/MaterialIcon";

// Types
import { Choice } from "./ChipFilterList";

export interface ChipRadioGroupProps {
  choices: Array<Choice>;
  onChange?: Function;
  value?: string;
}

/**
 * A list of Chips that the user can only choose *one* from
 * @param choices An array of choices
 * @param onChange Triggered when the selected Chip change
 */
const ChipRadioGroup = ({
  choices,
  onChange,
  value,
}: ChipRadioGroupProps): JSX.Element => {
  const [selectedID, setSelectedID] = useState<string | undefined>(value);

  useEffect(() => {
    if (onChange) onChange(selectedID);
  }, [selectedID]);

  return (
    <div className="chip-list--radio">
      {choices.map((choice) => (
        <Chip
          name={choice.name}
          selected={selectedID == choice.id}
          leadingIcon={
            selectedID == choice.id ? <MaterialIcon icon="done" /> : undefined
          }
          onClick={() => setSelectedID(choice.id)}
        />
      ))}
    </div>
  );
};

export default ChipRadioGroup;
