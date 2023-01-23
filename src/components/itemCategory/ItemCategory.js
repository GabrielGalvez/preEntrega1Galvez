/*Importaciones*/

//Modulos
//Estilos
import { useEffect, useState } from 'react';
import './ItemCategory.css';
//Componentes
import Item from '../item/Item';

//Core

/*Logica*/
const ItemCategory = (props) =>{//funcion constructora

    const [productos, setProductos] = useState([])
    
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${props.categoria}`)
            .then(res=>res.json())
            .then(json=>setProductos(json.map(productos => <Item key={productos.id} id={"Producto" + productos.id} data={productos}/>)))
    },[productos, props.categoria])



    return(
        <div>
            <p>Mi ItemCategory,Gabriel Galvez</p>
            {productos}
        </div>
    );

}
/*Exportacion*/
export default ItemCategory;