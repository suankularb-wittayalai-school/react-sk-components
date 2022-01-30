// Modules
import React, { useState } from "react";

// Components
import Search from "@components/Input/Search";

/**
 * The complete layout for List Layout, contains List Section and Main Section
 * @param listGroups A list of List Groups, each contains Group Lists, each contains List Items
 * @param ItemElement This renders an Item in the List Section
 * @param ActiveItemElement This renders the Active Item in the Main Section
 * @param fetchItem This function fetches the content of the active item
 * @param defaultActiveID The default item’s active ID 
 */
const ListLayout = ({
  listGroups,
  ItemElement,
  ActiveItemElement,
  fetchItem,
  defaultActiveID,
}: {
  listGroups: Array<{ groupName: string; content: Array<{}> }>;
  ItemElement: ({
    className,
    content,
  }: {
    className: string;
    content: {};
  }) => JSX.Element;
  ActiveItemElement: ({ content }: { content: any }) => JSX.Element;
  fetchItem: Function;
  defaultActiveID?: number;
}) => {
  const [activeID, setActiveID] = useState<number>(defaultActiveID || 0);
  const [activeItem, setActiveItem] = useState<any>();

  return (
    <main className="content-layout--list">
      {/* List Section */}
      <section className="content-layout--list__list">
        {/* Search */}
        <div className="content-layout--list__list__search">
          <Search />
        </div>

        {/* List */}
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
                    <ItemElement
                      className="select-list__item"
                      content={listItem}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Main Section */}
      <div className="content-layout--list__main">
        <ActiveItemElement content={activeItem} />
      </div>
    </main>
  );
};

export default ListLayout;