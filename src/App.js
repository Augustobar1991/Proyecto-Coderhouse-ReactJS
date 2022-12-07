import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/App.css';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import BodyApp from "./components/BodyApp";
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import CartContextComponent from './context/CartContextComponent';
import Contacto from "./components/Contacto";

export default function App() {
  return (
    <>
      <CartContextComponent>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/dimension/:idcategory" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/productos/:iditem" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <BodyApp/>
          <Footer />
        </BrowserRouter>
      </CartContextComponent>
    </>
  );
}
