import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="container">
    <div className="flecha"><a href="#" ><i className="bi bi-arrow-up-circle-fill flecha1"></i></a></div>
    <div className="row containerp"/>
    <div className="futer">
      <a className="fab fa-whatsapp whatsapp"  href="https://api.whatsapp.com/send?phone=5493454166220&text=hola,%20me%20interesa%20esto:" target="_blank">
      </a>
      <a className="fab fa-facebook facebook" href="https://www.facebook.com/lacasadelasllantasconcordia/" target="_blank">
      </a>
      <a className="fab fa-instagram instagram"  href="https://www.instagram.com/lacasadelasllantas/" target="_blank">
      </a>

    </div>
    <div >
      <p  className="containerSub">La Casa de las Lantas © 2022 | Marca registrada | Políticas de Privacidad</p>
    </div>
  </footer>
  );
}
