import React from 'react';
import sumLogo from '../assets/images/plus.png'
import substractLogo from '../assets/images/minus.png'

const ItemCount = () => {
  return (
    <div className="Item-Quantity">
        <div className="col-md-3">
            <a href="#"><img src={substractLogo} className="Substract-logo" alt="logo"/></a>
        </div>
        <div className="col-md-6">
            <input type="text" className="form-control Item-Number" placeholder="Stock" aria-label="Stock" disabled/>
        </div>
        <div className="col-md-3">
            <a href="#"><img src={sumLogo} className="Sum-logo" alt="logo"/></a>
        </div>
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
    </div>
  );
}

export default ItemCount;