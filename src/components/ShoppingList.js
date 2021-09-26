import React, { useState, useEffect } from "react";
import List from "./List";
import ListForm from "./ListForm";

function ShoppingList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addListItem = (item) => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return;
    }
    const newListListItem = [item, ...items];
    setItems(newListListItem);
  };

  const removeItem = (id) => {
    const removeArr = [...items].filter((item) => item.id !== id);
    setItems(removeArr);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <ListForm onSubmit={addListItem} />
      <List items={items} removeItem={removeItem} />
    </div>
  );
}

export default ShoppingList;
