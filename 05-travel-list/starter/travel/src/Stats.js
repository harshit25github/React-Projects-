import React from "react";

// Stats Component
export function Stats({ Items }) {
  const itemCount = Items.length;
  const packedItems = Items.filter((el) => el.packed).length;
  const packItemPercentage = (packedItems * 100) / itemCount;
  return (
    <footer className="stats">
      You have {itemCount} in Which pasked {packedItems} (
      {packItemPercentage.toFixed(2)} %)
    </footer>
  );
}
