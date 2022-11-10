import React, { useState } from "react";

export default function ItemCount({ ini, max, addItem }) {
  const [count, setCount] = useState(ini);
  function restar() {
    if (count >= 2) {
      setCount(count - 1);
    }
  }

  function sumar() {
    if (count < max) {
      setCount(count + 1);
    }
  }

  return (
    <div className="botonitemcart">
      <div>
            <button onClick={restar}>-</button>
            {count}
            <button onClick={sumar}>+</button>
      </div>
      <button onClick={() => addItem(count)}>AGREGAR</button>
      
    </div>
  );
}
