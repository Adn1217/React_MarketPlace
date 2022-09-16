import React from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';


const ItemListContainer = ({setSelectedItem}) => {

  const {categoryId} = useParams();
  
  return (
    <div className="container imgContainer">
        <ItemList setSelectedItem={setSelectedItem} type={categoryId}/>
    </div>
  );
}

export default ItemListContainer;
