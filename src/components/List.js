import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

function List({ items, removeItem }) {
  return (
    <>
      <ul
        layout
        className="ul-portal"
        style={{ display: "flex", flexDirection: "column", flex: 2 }}
      >
        {items.map((item, index) => (
          <li className="list-row" key={item.id}>
            <div>{item.text}</div>
            <div className="icons">
              <RiCloseCircleLine
                onClick={() => removeItem(item.id)}
                className="delete-icon"
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
