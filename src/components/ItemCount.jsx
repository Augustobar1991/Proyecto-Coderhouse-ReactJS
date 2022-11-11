import React, { useState } from "react";
import Button from '@mui/material/Button';
import "../styles/body.css";

export default function ItemCount({ ini, max, addItem}) {
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
            <Button className="botonn" variant="outlined" onClick={restar}>-</Button>
            {count}
            <Button className="botonn" variant="outlined" onClick={sumar}>+</Button>
      </div>
      <Button variant="outlined" onClick={() => addItem(count)}>AGREGAR</Button>
      
    </div>
  );
}
