import React from "react";
import { Link } from "react-router-dom";
import "../styles/body.css";

export default function Item({ item }) {
  return (
    <div className="bordeitem" key={item.id}>
      {JSON.stringify(item)}
      <Link to={"/item/" + item.id}>Comprar</Link>
    </div>
  );
}