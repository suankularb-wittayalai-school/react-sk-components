// Components
import InputChip from "../Chip/InputChip";
import ChipList from "./ChipList";

export interface ListItem {
  id: string;
  avatar?: JSX.Element;
  leadingIcon?: JSX.Element;
  name: string | JSX.Element;
}

export interface ChipInputListProps {
  list: Array<ListItem>;
  onChange?: (newList: Array<ListItem>) => void;
  scrollable?: boolean;
  noWrap?: boolean;
}

/**
 * A list of Filter Chips and Chip Radio Groups that the user can choose many from
 * @param list An array of choices the user has entered
 * @param setList Set the state of the list
 * @param scrollable If true, Chip List will fill the width and scroll
 * @param noWrap Disables wrapping when the width is too small, is *not* needed if `scrollable` is true
 */
const ChipInputList = ({
  list,
  onChange,
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
  </ChipList>
);

export default ChipInputList;
