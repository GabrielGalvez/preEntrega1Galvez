/*Importaciones*/

//Modulos
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
//Estilos
import './ItemDetailContainer.css';
//Componentes
import ItemDetail from '../itemDetail/ItemDetail.js';
//Core

/*Logica*/
const ItemDetailContainer = () =>{//funcion constructora

    const [productos,setProductos] = useState([])

    const {productoId} = useParams()

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productoId}`)
            .then(res=>res.json())
            .then(productos=>setProductos(<ItemDetail key={productos.id} id={"Producto" + productos.id} data={productos}/>))
    },[productoId])
    
    //retorno que se va a renderizar
    return(
            <section>
                <Link to="/productos">Volver a mis productos</Link>
                {productos}
            </section>
    );

}
/*Exportacion*/
export default ItemDetailContainer;