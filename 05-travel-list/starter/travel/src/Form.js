import React, { useState } from "react";

// Form component
export function Form({ toAddItems }) {
  const [inputText, setInputText] = useState("");
  const [inputSelect, setInputSelect] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputText) return;
    const newItem = {
      description: inputText,
      quantity: inputSelect,
      packed: false,
      id: Date.now(),
    };
    toAddItems(newItem);
    // initialItems.push(newItem);
    setInputText("");
    setInputSelect(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do u need for the trip</h3>
      <select
        value={inputSelect}
        onChange={(e) => setInputSelect(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
      <input
        value={inputText}
        type="text"
        placeholder="item..."
        onChange={(e) => setInputText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
