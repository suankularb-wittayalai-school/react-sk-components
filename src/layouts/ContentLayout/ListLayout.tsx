import React, { useState } from "react";

// Components
import Search from "@components/Input/Search";

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
            <li className="select-list__group">
              <h3 className="select-list__header">{listGroup.groupName}</h3>
              <ul className="select-list__items">
                {listGroup.content.map((listItem) => (
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
