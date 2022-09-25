
import React, {useState, useContext} from 'react';
import {CartContext} from './CartContext';
import deleteLogo from '../assets/images/delete.png'

const Cart = () => {
  const {cartItems, removeItem} = useContext(CartContext);
  const [defItems, setDefItems] = useState([...cartItems]);

  let listaCompra = [];
  let total = 0;

  console.log(defItems);

  function defRemoveItem (id) {
    removeItem(id);
    setDefItems([...cartItems]);
  }

  if (defItems.length == 0) {
    listaCompra = "No hay productos en su carrito";
  }else{
    listaCompra = [];
    defItems.map((item) => {
      let info = <div id={"itemInCart"+item.id} className="itemInCart col-lg" key={item.Nombre+"item"}>
            <div className="col-10">
              <p>
              <li key={item.Nombre}><strong>Nombre:</strong> {item.Nombre}<br/></li>
              <li key={item.Nombre+item.Precio}><strong>Precio:</strong> {item.Precio}<br/></li>
              <li key={item.Nombre+item.seleccionados}><strong>Cantidad:</strong> {item.seleccionados}<br/></li>
              <li key={item.Nombre+"Total"}><strong>Total:</strong> ${item.seleccionados*item.Precio}<br/></li>
              </p>
            </div> 
            <div className="eliminar col-2" id={"eliminarItem"+item.id} onClick={() =>defRemoveItem(item.id)} >
                <button ><img src={deleteLogo} className="Substract-logo" alt="deleteLogo"/></button>
            </div>
        </div>
      listaCompra.push(info)
      total = total + item.seleccionados*item.Precio;
    })
  }

  
  return (
    <div >
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