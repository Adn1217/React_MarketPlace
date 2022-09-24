
import React, {useContext} from 'react';
import {CartContext} from './CartContext';


const Cart = () => {
  const {cartItems} = useContext(CartContext);
  const listaCompra = [];
  let total = 0;

  cartItems.map((item) => {
    let info = <p key={item.Nombre+"item"}>
      <li key={item.Nombre}><strong>Nombre:</strong> {item.Nombre}<br/></li>
      <li key={item.Nombre+item.Precio}><strong>Precio:</strong> {item.Precio}<br/></li>
      <li key={item.Nombre+item.seleccionados}><strong>Cantidad:</strong> {item.seleccionados}<br/></li>
      <li key={item.Nombre+"Total"}><strong>Total:</strong> ${item.seleccionados*item.Precio}<br/></li>
      </p>
    listaCompra.push(info)
    total = total + item.seleccionados*item.Precio;
  })
  
  return (
    <div  >
        <h1>Su compra ha finalizado</h1>
        <h2>A continuación se encuentra la lista de su compra: </h2>
        <ol className = "card">
            <hr/>
            {listaCompra}
            <hr/>         
        </ol>
        <h3>Total a pagar: ${total}</h3>

    </div>
  );
}

export default Cart;