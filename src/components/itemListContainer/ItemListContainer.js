/*Importaciones*/

//Modulos


//Estilos
import './ItemListContainer.css';
//Componentes
import ItemList from '../itemList/ItemList.js';
//Core

/*Logica*/
const ItemListContainer = (props) =>{//funcion constructora


    //retorno que se va a renderizar
    return(
            <div style={{backgroundColor:"#C8FBCF"}}>
                <h2>Esta es la nueva tienda AppGalvez, {props.greeting}!</h2>

                <div><h1>BANNER PUBLICITARIO</h1></div>
                <ItemList />
            </div>
    );

}
/*Exportacion*/
export default ItemListContainer;