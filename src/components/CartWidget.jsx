import React from 'react';
import shoppingCart from '../assets/images/shopping-cart.png';
import {Link} from 'react-router-dom';

const CartWidget = () => {
  return (
    <div className="App-header-Chart">
        <Link to={'/Cart'} ><img src={shoppingCart} className="ShoppingChart-logo" alt="logo"/></Link>
    </div>
  );
}

export default CartWidget;