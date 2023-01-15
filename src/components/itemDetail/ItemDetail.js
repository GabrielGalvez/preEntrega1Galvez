/*Importaciones*/

//Modulos
//Estilos
import './ItemDetail.css';
//Componentes
import ItemCount from '../itemCount/ItemCount.js';
import ItemListContainer from '../itemListContainer/ItemListContainer.js';
//Core

/*Logica*/
const ItemDetail = (props) =>{//funcion constructora

    const {title, category, description, price, id} = props.data
    
    //retorno que se va a renderizar
    return(
            <article>
                <h1>DETALLE DEL PRODUCTO SELECCIONADO</h1>
                <p>{id}</p>
                <p>{category}</p>
                <p>{title}</p>
                <p>{description}</p>
                <p>${price}</p>
                <ItemCount stock={10}/>
                <h1>MAS PRODUCTOS</h1>
                <ItemListContainer/>
            </article>
    );

}
/*Exportacion*/
export default ItemDetail;