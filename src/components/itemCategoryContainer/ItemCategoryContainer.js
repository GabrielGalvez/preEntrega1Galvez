/*Importaciones*/

//Modulos
//Estilos
import './ItemCategoryContainer.css';
//Componentes
import { useParams } from 'react-router-dom';
import ItemCategory from '../itemCategory/ItemCategory.js';
//Core

/*Logica*/
const ItemCategoryContainer = () =>{//funcion constructora

    const {categoriaId} = useParams()
    return(
        <div>
            <ItemCategory categoria ={categoriaId}/>
        </div>
    )
}
/*Exportacion*/
export default ItemCategoryContainer;