import React from 'react';
import shoppingCart from '../assets/images/shopping-cart.png'

const CartWidget = () => {
  return (
    <div className="App-header-Chart">
        <a href="#"><img src={shoppingCart} className="ShoppingChart-logo" alt="logo"/></a>
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
    </div>
  );
}

export default CartWidget;