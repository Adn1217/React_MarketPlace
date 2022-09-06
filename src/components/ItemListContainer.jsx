import React, {useEffect} from 'react';
import pcImage from '../assets/images/pcImage.jpg';
import ItemCount from './ItemCount';

let stockDataApi = 'stock.json';


const ItemListContainer = ({tipo}) => {
    let data = []

    useEffect( () => {
        async function dofetch(stockDataApi){
            setTimeout( async () => {
                try{
                    let response = await fetch(stockDataApi);  
                    // let response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
                    data = await response.json();
                    console.log(JSON.stringify(data))
                    // return data;
                }catch(error){
                    console.log("Ha ocurrido el siguiente error: ", error)
                    // return error;
                }
                finally{
                    console.log("Se realizó consulta de inventario.") 
                }
            },2000)
        }
        dofetch(stockDataApi);
    }, [])

  return (
    <div className="container imgContainer">
        <div className="card">
            <a href="#"><img src={pcImage} className="card-img-top" alt="pcImage1"/></a>
            <div className="card-body">
                <p className="card-text"><strong>Nombre: </strong>{tipo} 1<br/><strong>Marca: </strong>ACER<br/> <strong>Año: </strong>2021<br/><strong>Precio: </strong> $1'350.000 COP</p>
                <ItemCount />
            </div>
        </div>
        <div className="card">
            <a href="#"><img src={pcImage} className="card-img-top" alt="pcImage2"/></a>
            <div className="card-body">
            <p className="card-text"><strong>Nombre: </strong>{tipo} 2<br/><strong>Marca: </strong>ASUS<br/> <strong>Año: </strong>2020<br/><strong>Precio: </strong> $1'100.000 COP</p>
            <ItemCount />
            </div>
        </div>
        <div className="card">
            <a href="#"><img src={pcImage} className="card-img-top" alt="pcImage3"/></a>
            <div className="card-body">
            <p className="card-text"><strong>Nombre: </strong>{tipo} 3<br/><strong>Marca: </strong>LENOVO<br/> <strong>Año: </strong>2019<br/><strong>Precio: </strong> $950.000 COP</p>
            <ItemCount />
            </div>
        </div>
    </div>
  );
}

export default ItemListContainer;
