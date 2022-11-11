import React from "react";
import ItemCount from "./ItemCount";
import Button from '@mui/material/Button';
import "../styles/body.css";

export default function ItemDetail({ producto }) {
  function addItem(x) {
    alert("El total saldria: " + x * producto.precio);
  }
  return (
    <div className="cartitem">
      {producto.id ? (
        <>
            <h1 className="tituloh1">{producto.name}</h1>
            <div className="idprod">cod. de prod. {producto.id} </div>
        <div className="cartsubitem">
          <div><img src={producto.imagen} alt="" /></div>  
            <div className="cartdetalletem">
              <ItemCount ini={1} max={producto.stock} addItem={addItem} />
              <div>{producto.stock} disponible</div> 
              <div>              
                <div>Tamaño: {producto.dimension}</div>  
              </div>
            <div>${producto.precio}</div>  
          </div>
          <div className="cartpreciotem">Total: ${producto.precio}</div>
          <div className="cartbuytem">
              <Button variant="outlined" color="success">Continuar compra</Button>
          </div>
        </div>
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}
