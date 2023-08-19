import React from "react";

export function Item({ item, toDeleteItem, onPacked }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onPacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => toDeleteItem(item.id)}>❌</button>
    </li>
  );
}
