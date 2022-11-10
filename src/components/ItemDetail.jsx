import React from "react";
import ItemCount from "./ItemCount";
import "../styles/body.css";
import Button from '@mui/material/Button';

export default function ItemDetail({ producto }) {
  function addItem(x) {
    alert("quiere agregar " + x * producto.precio);
  }
  return (
    <div className="cartitem">
      {producto.id ? (
        <>
            <h2 className="tituloh2">{producto.name}</h2>
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
              <Button variant="contained" color="success">Comprar</Button>
            </div>
          </div>
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}
