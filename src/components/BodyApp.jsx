import React from "react";
import "../styles/body.css";

export default function BodyApp() {
  return (
    <div>
  <section class="store">
        <div class="container">
        <div class="titulorventllantas">
            <h2 id="ventaDeLlantas" class="featurette-heading ventaDeLlantas">Venta de llantas</h2>
            <ul class="lead texto-repllanta">
                <li>Estrená hoy las mejores llantas para tu vehículo las encontrás en un único lugar! 🚗</li>
                <li>Vení que te asesoramos! </li>
                <li>Tenemos todas las llantas que buscas:</li>
                <li>🚗  Llantas para Auto</li>
                <li>🚙  Llantas para Camioneta</li>
                <li>🚛  Llantas para Camión</li>
                <li>🚜  Llantas para Tractor</li>
                <li>Aún no te decidiste? Contactanos <a href="#contacto">aqui</a></li>
            </ul>
            </div>
            <div class="items">
                <div id="contenedor"></div>
            </div>
        </div>
    </section>
    </div>
  );
}
