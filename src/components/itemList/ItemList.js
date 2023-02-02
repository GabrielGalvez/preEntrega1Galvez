/*Importaciones*/

//Modulos
import { useState, useEffect } from 'react';
//Estilos
import './ItemList.css';
//Componentes
import Item from '../item/Item.js';
//Core

/*Logica*/
const ItemList = (props) => {

    const [productos, setProductos] = useState([])

    //Nuestra API de productos
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProductos(json.map(productos => <Item key={productos.id} id={"Producto" + productos.id} data={productos} />)))



    }
        , [])



    //Tenemos un retraso de informacion


    return (
        <div>
            <p>Mi ItemList,Gabriel Galvez</p>
            {productos}
        </div>
    )
}
/*Exportacion*/
export default ItemList;