// Modules
import { useEffect, useState } from "react";

// Components
import Search from "../../components/Input/Search";

// Types
import { SKComponent } from "../../utils/types";

export interface CardListProps extends SKComponent {
  listGroups: Array<{
    groupName: string;
    content: Array<{ id: number; content: any }>;
  }>;
  ListItem: ({
    id,
    content,
    className,
  }: {
    id: number;
    content: any;
    className: string;
    onClick: () => void;
  }) => JSX.Element;
  onChange: (id: number) => any;
}

/**
 * The list of Cards that can be selected
 * @param listGroups An array of List Groups which contains List Items
 * @param ListItem The element for List Item, must accept id, content, className, and onClick
 * @param onChange The function triggered when the active ID changes
 */
const CardList = ({
  listGroups,
  ListItem,
  onChange,
  className,
  style,
}: CardListProps) => {
  const [activeID, setActiveID] = useState<number>(0);

  useEffect(() => onChange(activeID), [activeID]);

  return (
    <section className={`card-list ${className || ""}`} style={style}>
      {/* Search */}
      <div className="card-list__search">
        <Search />
      </div>

      <div className="card-list__list">
        <ul className="card-list__list-content">
          {listGroups.map((listGroup) => (
            // List Group
            <li key={listGroup.groupName} className="card-list__group">
              {/* Group Header */}
              <h3 className="card-list__header">{listGroup.groupName}</h3>
              {/* Group Content */}
              <ul className="card-list__items">
                {listGroup.content.map((listItem) => (
                  // List Item
                  <li key={listItem.id}>
                    <ListItem
                      id={listItem.id}
                      content={listItem.content}
                      className={`card-list__item ${
                        activeID == listItem.id ? "active" : ""
                      }`}
                      onClick={() => setActiveID(listItem.id)}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CardList;
