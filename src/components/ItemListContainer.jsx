import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';


const ItemListContainer = ({tipo}) => {

  return (
    <div className="container imgContainer">
        <ItemList tipo={tipo}/>
    </div>
  );
}

export default ItemListContainer;
