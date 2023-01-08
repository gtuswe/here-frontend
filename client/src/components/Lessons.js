import React from "react";
import "./Lessons.css";
import { Link } from "react-router-dom";
import { getLessons } from "./LessonsAPI";

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

function onClick() {
  // route to /scan-qr
  <Link to="/scan-qr">Scan QR</Link>;
}

function Lessons() {
  
  getLessons()
    .then((data) => {
      if (data.status === 200) {
        console.log(data);
      }
    })
    .catch((err) => console.log("Error occurred"));

  return (
    <div className="grid-list">
      {items.map((item) => (
        <div className="grid-item" key={item.name} onClick={() => {}}>
          <img src={item.image} alt={item.name} />
          <div className="item-name">{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Lessons;
