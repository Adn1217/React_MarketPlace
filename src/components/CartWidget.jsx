import React, {useState, useEffect, useContext} from 'react';
import shoppingCart from '../assets/images/shopping-cart.png';
import {Link} from 'react-router-dom';
import { CartContext } from './CartContext';


const CartWidget = () => {

  const {cartItems} = useContext(CartContext);
  const [cartItemsNum, setCartItemsNum] = useState(cartItems.length);


  useEffect(() => {
    setCartItemsNum(0);
    setCartItemsNum(cartItems.length);
  }, [cartItems])

  function cartItemsNumber(number){
    return <div key={"cartItemsNum"+number} className="animate__animated animate__bounce"><span id="cartItemsNum" >{number}</span></div>
  }

  return (
    <div className="App-header-Chart">
        <Link to={'/Cart'} ><img src={shoppingCart} className="ShoppingChart-logo" alt="logo"/></Link>
        {cartItemsNum > 0 ? cartItemsNumber(cartItemsNum):""}
    </div>
  );
}

export default CartWidget;