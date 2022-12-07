import React from "react";
import "../styles/contacto.css";
import GoogleMap from "./maps";
import { Link } from 'react-router-dom';

export default function Contacto(props) {
  return <div><section className="mb-4" id="contacto">
  <h2 className="contactop">Contacto</h2>
  <div className="lineacontacto"></div>

  <h2 className="h2-responsive text-center">Consultanos</h2>
  <h2 className="text-center texto">De Lunes a Viernes de 8 a 12hs y de 15 a 20hs</h2>
  <h2 className="text-center texto">Los Sabados de 8 a 12hs</h2>
    <div className="row">
        <h2 className="text-center ubi">Estamos en:</h2>
      <div className="contacto__mapa">
      <GoogleMap
          onLoad={map => {
            const bounds = new window.google.maps.LatLngBounds();
            map.fitBounds(bounds);
          }}
          onUnmount={map => {
          }}
        />
      </div>
      <div className="col-md-4 text-center espacioubi">
        <ul className="list-unstyled mb-0">
            <li><i className="fas fa-map-marker-alt fa-2x"></i>
               <a href="https://www.google.com/maps?ll=-31.373961,-58.012663&z=17&t=m&hl=es-419&gl=AR&mapclient=embed&cid=9566184030273605600"  target="_blank"><p>Concordia, Entre Rios, Argentina</p></a>
            </li>
            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <a  href="tel:+5493454214174" ><p>3454166220</p></a>
            </li>
            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
            <a href={'contacto@lacasadelasllantas.com'}><p>contacto@lacasadelasllantas.com</p></a>
            </li>
        </ul>
      </div>
    </div> 
</section></div>;
}