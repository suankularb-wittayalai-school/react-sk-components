// Components
import ActionChip from "../Chip/ActionChip";
import InputChip from "../Chip/InputChip";
import ChipList from "./ChipList";
import MaterialIcon from "../Icon/MaterialIcon";

export interface ListItem {
  id: string;
  avatar?: JSX.Element;
  leadingIcon?: JSX.Element;
  name: string | JSX.Element;
}

export interface ChipInputListProps {
  list: Array<ListItem>;
  onChange?: (newList: Array<ListItem>) => void;
  onAdd?: Function;
  addChipName?: string;
  scrollable?: boolean;
  noWrap?: boolean;
}

/**
 * A list of Chips added by the user via an input
 * @param list An array of Chip Input List Items the user has entered
 * @param onChange Triggered when a Chip Input List Item is deleted
 * @param onAdd Triggered when the Add Chip is
 * @param addChipName Add Chip label for screenreaders
 * @param scrollable If true, Chip List will fill the width and scroll
 * @param noWrap Disables wrapping when the width is too small, is *not* needed if `scrollable` is true
 */
const ChipInputList = ({
  list,
  onChange,
  onAdd,
  addChipName,
  scrollable,
  noWrap,
}: ChipInputListProps): JSX.Element => (
  <ChipList scrollable={scrollable} noWrap={noWrap}>
    {list.map((listItem, index) => (
      <InputChip
        key={index}
        name={listItem.name}
        avatar={listItem.avatar}
        leadingIcon={listItem.leadingIcon}
        onClose={() =>
          onChange && onChange(list.filter((item) => listItem.id != item.id))
        }
      />
    ))}
    {onAdd && (
      <ActionChip
        name={addChipName || "Add"}
        icon={<MaterialIcon icon="add" />}
        onClick={() => onAdd()}
      />
    )}
  </ChipList>
);

export default ChipInputList;
