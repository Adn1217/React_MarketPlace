import React, {useState, useEffect, useContext} from 'react';
import shoppingCart from '../assets/images/shopping-cart.png';
import {Link} from 'react-router-dom';
import { CartContext } from './CartContext';


const CartWidget = () => {

  const {cartItems} = useContext(CartContext);
  const [cartItemsNum, setCartItemsNum] = useState(cartItems.length);


  useEffect(() => {
    setCartItemsNum(cartItems.length);
  }, [cartItems])


  return (
    <div className="App-header-Chart">
        <Link to={'/Cart'} ><img src={shoppingCart} className="ShoppingChart-logo" alt="logo"/></Link>
        {cartItemsNum > 0 ? <span id="cartItemsNum">{cartItemsNum}</span>:""}
    </div>
  );
}

export default CartWidget;