/*Importaciones*/

//Modulos
//Estilos
import './Item.css';
//Componentes
import ItemCount from '../itemCount/ItemCount.js';
//Core

/*Logica*/
const Item = (props) =>{//funcion constructora

    const {title,category,description,price} = props.data
    return(
            <div>
                <p>{category}</p>
                <p>{title}</p>
                <p>{description}</p>
                <p>{price}</p>
                <ItemCount stock={10}/>
            </div>
    );

}
/*Exportacion*/
export default Item;