/*Importaciones*/

//Modulos
//Estilos
import './ItemListContainer.css';
//Componentes
//Core

/*Logica*/
const ItemListContainer = (props) =>{//funcion constructora

    
    //retorno que se va a renderizar
    return(
            <p style={{backgroundColor:"#3393dc"}}>
                Esta es la nueva tienda AppGalvez, {props.greeting}!
            </p>
    );

}
/*Exportacion*/
export default ItemListContainer;