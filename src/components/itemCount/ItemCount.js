/*Importaciones*/

//Modulos
import {useState} from 'react'
//Estilos
import './ItemCount.css';
//Componentes
//Core

/*Logica*/
const ItemCount = (props) =>{
    //props.stock = 7
    //No puede restar menos de cero
    //No puede sumar mas de la cantidad maxima en stock
    //Agregar un manejo de estados
    //useState
    const [count,setCount] = useState(0)
    //Funcion de sumar uno con un maximo de stock
    const addOne = () =>{
        if (count < props.stock){
            setCount(count + 1)
        }
    }
    //Funcion de restar uno seteando un minimo de cero
    const disOne = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }


    //Funcion agregar x cantidad de productos
    const onAdd = () =>{
        console.log(count);
    }
    return(
            <div className='box-count' >
                <div className='box-count-children'>
                    <button onClick={addOne}>+</button>
                    <p className='item-count'>{count}</p>
                    <button onClick={disOne}>-</button>
                </div>
                <button onClick={onAdd}>On add</button>
            </div>
    );

}
/*Exportacion*/
export default ItemCount;