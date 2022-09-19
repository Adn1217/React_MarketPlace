import React from 'react';
import shoppingCart from '../assets/images/shopping-cart.png'

const CartWidget = () => {
  return (
    <div className="App-header-Chart">
        <a href="#"><img src={shoppingCart} className="ShoppingChart-logo" alt="logo"/></a>
    </div>
  );
}

export default CartWidget;