import React, {useEffect, useState} from 'react';
import pcImage from '../assets/images/pcImage.jpg';
import ItemCount from './ItemCount';

let stockDataApi = 'stock.json';

const ItemListContainer = ({tipo}) => {

    const [stock, setStock] = useState([]);

    useEffect( () => {
        async function doFetch(stockDataApi){
            setTimeout( async () => {
                try{
                    let response = await fetch(stockDataApi);  
                    // let response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
                    let data = await response.json();
                    console.log(JSON.stringify(data))
                    setStock(data);
                    return data;
                }catch(error){
                    console.log("Ha ocurrido el siguiente error: ", error)
                    return error;
                }
                finally{
                    console.log("Se realizó consulta de inventario.") 
                }
            },2000)

        }
        doFetch(stockDataApi);
    }, [])
    console.log(stock.length>0 ? stock: "No hay datos"); 
    // let body1 = `<p className="card-text"><strong>Nombre: </strong>${tipo} 1<br/><strong>Marca: </strong>${stock[0]["Marca"]??}<br/> <strong>Año: </strong>${stock[0]["Anio"]??}<br/><strong>Precio: </strong> $${stock[0]["Precio"]??}</p`
  return (
    <div className="container imgContainer">
        <div className="card">
            <a href="#"><img src={pcImage} className="card-img-top" alt="pcImage1"/></a>
            <div className="card-body">
                <p className="card-text">`<strong>Nombre: </strong>{tipo} 1<br/><strong>Marca: </strong><br/> <strong>Año: </strong>2021<br/><strong>Precio: </strong> $1'350.000 COP`</p>
                <ItemCount {...stock[0]} />
            </div>
        </div>
        <div className="card">
            <a href="#"><img src={pcImage} className="card-img-top" alt="pcImage2"/></a>
            <div className="card-body">
            <p className="card-text"><strong>Nombre: </strong>{tipo} 2<br/><strong>Marca: </strong>ASUS<br/> <strong>Año: </strong>2020<br/><strong>Precio: </strong> $1'100.000 COP</p>
            <ItemCount {...stock[1]}/>
            </div>
        </div>
        <div className="card">
            <a href="#"><img src={pcImage} className="card-img-top" alt="pcImage3"/></a>
            <div className="card-body">
            <p className="card-text"><strong>Nombre: </strong>{tipo} 3<br/><strong>Marca: </strong>LENOVO<br/> <strong>Año: </strong>2019<br/><strong>Precio: </strong> $950.000 COP</p>
            <ItemCount {...stock[2]}/>
            </div>
        </div>
    </div>
  );
}

export default ItemListContainer;
