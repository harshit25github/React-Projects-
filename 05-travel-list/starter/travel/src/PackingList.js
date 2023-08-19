import React, { useState } from "react";
import { Item } from "./Item";

// Packing list component
export function PackingList({ Items, toDeleteItem, onPacked }) {
  const [sortBy, setSortBy] = useState("input");
  function handleSort(e) {
    setSortBy(e.target.value);
  }
  return (
    <div className="list">
      <ul>
        {Items.map((el) => (
          <Item
            item={el}
            key={el.id}
            toDeleteItem={toDeleteItem}
            onPacked={onPacked}
          ></Item>
        ))}{" "}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={handleSort}>
          <option value="input">Sort by input oder</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by Packed Item</option>
        </select>
      </div>
    </div>
  );
}
