import React from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';


const ItemListContainer = ({setSelectedItem}) => {

  const {id} = useParams();
  
  return (
    <div className="container imgContainer">
        <ItemList setSelectedItem={setSelectedItem} type={id}/>
    </div>
  );
}

export default ItemListContainer;
