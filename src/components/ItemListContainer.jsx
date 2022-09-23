import React from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';


const ItemListContainer = () => {

  const {categoryId} = useParams();
  
  return (
    <div className="container imgContainer">
        <ItemList type={categoryId}/>
    </div>
  );
}

export default ItemListContainer;
