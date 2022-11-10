import React from "react";
import Item from "./Item";
import "../styles/item.css";

export default function ItemList({ productos }) {
  return (
    <div className="itemcart">
      {!productos.length && "Loading..."}
      {productos.map((item) => (
        <Item item={item} />
      ))}
    </div>
  )
}
