import React from 'react';
import { cartContext } from '../context/CartContextComponent';
import '../styles/Checkout.css';
import '../styles/ItemCartDetail.css';
import Form from './Form';
import ItemCartDetail from './ItemCartDetail';
import PurchasedOrder from './PurchasedOrder';
import { Watch } from 'react-loader-spinner';

export default function Checkout() {
  const { cart, orderCreated } = React.useContext(cartContext);

  return (
    <>
      {cart.length !== 0 ? (
        <>
        <section className="mb-4" id="contacto">
          <h2 className="contactop">FINALIZA TU COMPRA</h2>
          <div className="lineacontacto"></div>
          <div className="checkoutContainer">
            <div className="formContainer">
              <Form />
            </div>
            <ItemCartDetail />
          </div>
          </section>
        </>
      ) : orderCreated !== '' ? (
        <>
          <PurchasedOrder />
        </>
      ) : (
        <>
          <div className="watchContainer">
            <Watch height="250" width="250" radius="48" color="red" ariaLabel="watch-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
          </div>
          
        </>
      )}
    </>
  );
}
