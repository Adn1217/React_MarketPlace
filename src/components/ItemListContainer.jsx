import React from 'react';
import ItemList from './ItemList';


const ItemListContainer = ({setSelectedItem}) => {

  return (
    <div className="container imgContainer">
        <ItemList setSelectedItem={setSelectedItem}/>
    </div>
  );
}

export default ItemListContainer;
