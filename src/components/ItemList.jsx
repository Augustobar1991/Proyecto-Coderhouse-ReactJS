import React from 'react';
import Item from './Item';
import "../styles/Item.css";

export default function ItemList({ productos }) {
  return (
    <div className="itemcart">
      {productos.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
}
