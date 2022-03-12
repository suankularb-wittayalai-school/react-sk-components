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
  required?: boolean;
  value?: string;
}

/**
 * A list of Chips that the user can only choose *one* from
 * @param choices An array of choices
 * @param onChange Triggered when the selected Chip change
 * @param required If true, one Chip must be selected at all times
 * @param value The default value
 */
const ChipRadioGroup = ({
  choices,
  onChange,
  required,
  value,
}: ChipRadioGroupProps): JSX.Element => {
  const [selectedID, setSelectedID] = useState<string | null>(null);

  useEffect(() => {
    if (value) setSelectedID(value);
  }, []);

  useEffect(() => {
    if (onChange) onChange(selectedID);
  }, [selectedID]);

  return (
    <div className="chip-list--radio">
      {choices.map((choice) => (
        <Chip
          key={choice.id}
          name={choice.name}
          selected={selectedID == choice.id}
          leadingIcon={
            selectedID == choice.id ? <MaterialIcon icon="done" /> : undefined
          }
          onClick={() => {
            if (!required && selectedID == choice.id) setSelectedID(null);
            else setSelectedID(choice.id);
          }}
        />
      ))}
    </div>
  );
};

export default ChipRadioGroup;
