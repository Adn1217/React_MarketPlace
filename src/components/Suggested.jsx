import React from 'react';
import {ConfMsgPopUp, MsgPopUp, toastMsgPopUpNoTimer} from '../utils/functions.js';
import {collection, addDoc, getFirestore} from 'firebase/firestore';
import ItemListContainer from './ItemListContainer';
import {guardarDataLocal, cargarDataLocal} from '../utils/functions.js';

async function addMockToFirebase() {
    const stockData = 'stock.json';
    const db = getFirestore();
    const productsTestCollection = collection(db,'stock_MarketPlace');
    let response = await fetch(stockData);  
    let data = await response.json();
    let resp = [];
    let ids = [];
    let success = true;
    let msg = '';
    let toast = toastMsgPopUpNoTimer('',"Cargando datos a Firebase",'info')
    
    await Promise.all(data.map(async (doc) =>{
        try {
            resp = await addDoc(productsTestCollection, doc);
            ids.push(resp.id)
        }catch(error){
            success = false;
            console.log("Se ha presentado el siguiente error durante el proceso de carga", error);
        }finally{
            msg ="La carga ha " + (success ? "sido exitosa" : "fallado");
            console.log(msg);
        }
    }))
    toast.close();
    let confirmSucess = await ConfMsgPopUp(msg,' ', success ? 'success' : 'error',false);
    confirmSucess.isConfirmed && success && MsgPopUp('Fueron cargados productos con los siguientes ids: '+ids.join(', '),'', 'info')
}

const Suggested = () => {
    
    let compras = cargarDataLocal("Compra");
    let itemsIdList = [];

    compras.length > 0 && compras.forEach( (item) => {
        itemsIdList.find(itemId => itemId === item.id) ?? itemsIdList.push(item.id);
    })
    
    compras.length === 0 && (itemsIdList.push('NoHayCompra'));

    return (
        <div>
            <hr />
            <h1>Sugerencias</h1>
                <p>Sugerencias basadas en sus <code>compras</code> anteriores.</p>
                <a className="App-link" href="https://github.com/Adn1217/React_MarketPlace"
                target="_blank" rel="noopener noreferrer"> Repositorio donde se encuentra mi aplicación de mercado en línea en <strong>React</strong>.</a>
                <div id="CargarMock"  >
                    <button onClick={()=>addMockToFirebase()} className="btn btn-outline-primary">Agregar Mock de datos a Firebase</button>
                </div>
                <ItemListContainer itemsIdList={itemsIdList}/>
            <hr />
        </div>)
}

export default Suggested;