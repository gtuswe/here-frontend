import React from "react";
import "./Lessons.css";

const items = [
  {
    name: "Item 1",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Item 2",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Item 3",
    image: "https://picsum.photos/200/300",
  },
    {
    name: "Item 4",
    image: "https://picsum.photos/200/300",
    },
    {
    name: "Item 5",
    image: "https://picsum.photos/200/300",
    },
    {
    name: "Item 6",
    image: "https://picsum.photos/200/300",
    },
  // add more items here
];

function Lessons() {
  return (
    <div className="grid-list">
      {items.map((item) => (
        <div className="grid-item" key={item.name}>
          <img src={item.image} alt={item.name} />
          <div className="item-name">{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Lessons;
