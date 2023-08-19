import React, { useState } from "react";
import { Stats } from "./Stats";
import { PackingList } from "./PackingList";
import { Form } from "./Form";
import { Logo } from "./Logo";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Socks", quantity: 12, packed: false },
];
export default function App() {
  const [Items, setItems] = useState([]);
  //const [deleteItem , setDeleteItem] = useState(-1)
  function handleAdditems(item) {
    setItems((items) => [...items, item]);
    // console.log(Items);
  }
  function handleDeleteItem(Id) {
    console.log(Items);
    const newItems = Items.filter((el) => el.id !== Id);
    console.log(Id, newItems);
    setItems([...newItems]);
  }
  function handlePackedItem(Id) {
    // const item = Items.find((el) => el.id === Id);
    // if (item) {
    //   item.packed = true;
    //   setItems((items) => [...items]);
    // }
    console.log(Items);
    setItems((items) =>
      items.map((item) =>
        item.id === Id ? { ...item, packed: !item.packed } : item
      )
    );
    console.log(Items);
  }
  return (
    <div className="app">
      <Logo />
      <Form toAddItems={handleAdditems} />
      <PackingList
        Items={Items}
        toDeleteItem={handleDeleteItem}
        onPacked={handlePackedItem}
      />
      <Stats Items={Items} />
    </div>
  );
}
