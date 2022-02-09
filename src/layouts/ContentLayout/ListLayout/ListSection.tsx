// Modules
import React, { useEffect, useState } from "react";

// Components
import Search from "../../../components/Input/Search";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

export interface ListSectionProps {
  listGroups: Array<{
    groupName: string;
    content: Array<{ id: number; content: {} }>;
  }>;
  ListItem: ({
    content,
    className,
  }: {
    content: {};
    className: string;
    onClick: () => void;
  }) => JSX.Element;
  onChange: (id: number) => any;
}

/**
 * The left section of List Layout where Select List lives
 * @param listGroups An array of List Groups which contains List Items
 * @param ListItem The element for List Item, must accept content, className, and onClick
 * @param onChange The function triggered when the active ID changes
 */
const ListSection = ({ listGroups, ListItem, onChange }: ListSectionProps) => {
  const [activeID, setActiveID] = useState<number>(0);

  useEffect(() => onChange(activeID), [activeID]);

  return (
    <section className="content-layout--list__list">
      {/* Search */}
      <div className="content-layout--list__list__search">
        <Search />
      </div>

      <ul className="select-list content-layout--list__list__list">
        {listGroups.map((listGroup) => (
          // List Group
          <li className="select-list__group">
            {/* Group Header */}
            <h3 className="select-list__header">{listGroup.groupName}</h3>

            {/* Group Content */}
            <ul className="select-list__items">
              {listGroup.content.map((listItem) => (
                // List Item
                <li>
                  <ListItem
                    content={listItem}
                    className={`select-list__item ${
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
    </section>
  );
};

export default ListSection;
