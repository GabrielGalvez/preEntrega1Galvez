/*Importaciones*/

//Modulos
import { useState } from 'react';
//Estilos
import './ItemListContainer.css';
//Componentes
import ItemList from '../itemList/ItemList.js';
//Core

/*Logica*/
const ItemListContainer = (props) =>{//funcion constructora

    const[categoria,setCategoria] = useState("all")
    
    const categoriaHardware = () => {setCategoria("Hardware")}
    const categoriaSofware = () => {setCategoria("Software")}
    const categoriaMueble = () => {setCategoria("Mueble")}
    const categoriaAll = () => {setCategoria("all")}
    //retorno que se va a renderizar
    return(
            <div style={{backgroundColor:"#3393dc"}}>
                <h2>Esta es la nueva tienda AppGalvez, {props.greeting}!</h2>
                <button onClick={categoriaHardware}>Hardware</button>
                <button onClick={categoriaSofware}>Software</button>
                <button onClick={categoriaMueble}>Mueble</button>
                <button onClick={categoriaAll}>All</button>
                <div><h1>BANNER PUBLICITARIO</h1></div>
                <ItemList categoriaName={categoria}/>
            </div>
    );

}
/*Exportacion*/
export default ItemListContainer;