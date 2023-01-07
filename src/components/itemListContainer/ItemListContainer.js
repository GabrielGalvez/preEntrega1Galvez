/*Importaciones*/

//Modulos
//Estilos
import './ItemListContainer.css';
//Componentes
import ItemCount from '../itemCount/ItemCount.js';
//Core

/*Logica*/
const ItemListContainer = (props) =>{//funcion constructora

    
    //retorno que se va a renderizar
    return(
            <div style={{backgroundColor:"#3393dc"}}>
                Esta es la nueva tienda AppGalvez, {props.greeting}!
                <ItemCount stock="7"/>
            </div>
    );

}
/*Exportacion*/
export default ItemListContainer;