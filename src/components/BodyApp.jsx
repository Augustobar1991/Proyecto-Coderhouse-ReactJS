import React from "react";
import "../styles/body.css";

export default function BodyApp() {
  return (
    <div>
  <section className="store">
        <div className="container">
        <div className="titulorventllantas">
            <ul className="lead texto-repllanta">
                <li>Estrená hoy las mejores llantas para tu vehículo las encontrás en un único lugar! 🚗</li>
                <li>Vení que te asesoramos! </li>
                <li>Tenemos todas las llantas que buscas:</li>
                <li>🚗  Llantas para Auto</li>
                <li>🚙  Llantas para Camioneta</li>
                <li>🚛  Llantas para Camión</li>
                <li>🚜  Llantas para Tractor</li>
            </ul>
            </div>
            <div className="items">
                <div id="contenedor"></div>
            </div>
        </div>
    </section>
    </div>
  );
}
