// Modules
import React from "react";

// Components
import CardList from "../../../components/CardList/CardList";

// Styles
import "@suankularb-components/css/dist/css/suankularb-components.min.css";

// Types
import { CardListProps } from "../../../components/CardList/CardList";

/**
 * The left section of List Layout where Card List lives
 * @param listGroups An array of List Groups which contains List Items
 * @param ListItem The element for List Item, must accept content, className, and onClick
 * @param onChange The function triggered when the active ID changes
 */
const ListSection = ({ listGroups, ListItem, onChange }: CardListProps) => {
  return (
    <section className="content-layout--list__list">
      <CardList
        listGroups={listGroups}
        ListItem={ListItem}
        onChange={onChange}
      />
    </section>
  );
};

export default ListSection;
