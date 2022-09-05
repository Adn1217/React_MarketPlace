import React from 'react';
import sumLogo from '../assets/images/plus.png'
import substractLogo from '../assets/images/minus.png'

const ItemCount = () => {
  return (
    <div className="Item-Quantity">
        <div clasName="col-md-3">
            <a href="#"><img src={substractLogo} className="Substract-logo" alt="logo"/></a>
        </div>
        <div className="col-md-6">
            <input type="text" class="form-control Item-Number" placeholder="Stock" aria-label="Stock" disabled/>
        </div>
        <div clasName="col-md-3">
            <a href="#"><img src={sumLogo} className="Sum-logo" alt="logo"/></a>
        </div>
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
    </div>
  );
}

export default ItemCount;