import "./App.css";
import "./index.css";

import React from "react";
import BodyApp from "./components/BodyApp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import Checkout from "./components/Checkout";
import Contacto from "./components/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {

  return (
    <BrowserRouter>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}
      <Navbar />
      {/* ACA DECLARO RUTAS PUNTUALES */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/category/:idcategory" element={<ItemListContainer />} />
        <Route path="/item/:iditem" element={<ItemDetailContainer />} />
      </Routes>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO*/}
      <BodyApp />
      <Footer />
    </BrowserRouter>
  );
}
