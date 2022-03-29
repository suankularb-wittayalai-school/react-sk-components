// Components
import CardList from "../../../components/CardList/CardList";

// Types
import { CardListProps } from "../../../components/CardList/CardList";

/**
 * The left section of List Layout where Card List lives
 * @param listGroups An array of List Groups which contains List Items
 * @param ListItem The element for List Item, must accept content, className, and onClick
 * @param onChange The function triggered when the active ID changes
 */
const ListSection = ({
  listGroups,
  ListItem,
  onChange,
  className,
  style,
}: CardListProps) => {
  return (
    <section className="content-layout__list-section">
      <CardList
        listGroups={listGroups}
        ListItem={ListItem}
        onChange={onChange}
        className={className}
        style={style}
      />
    </section>
  );
};

export default ListSection;
