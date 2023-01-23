/*Importaciones*/

//Modulos
//Estilos
import './ItemDetail.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//Componentes
import ItemCount from '../itemCount/ItemCount.js';
import ItemListContainer from '../itemListContainer/ItemListContainer.js';
import { useState } from 'react';
//Core

/*Logica*/
const ItemDetail = (props) =>{//funcion constructora

    const [cantidad, setCantidad] = useState(0)

    const {title, category, description, price, id} = props.data

    const tomarCantidad = (numero) =>{
        setCantidad(numero)
    }

    const onAdd = () =>{
        console.log(`Dentro de ItemDetail tengo una cantidad de ${cantidad} y el precio total del producto es ${cantidad*price}`);
    }
    

    //retorno que se va a renderizar
    return(
            <article>
                <h1>DETALLE DEL PRODUCTO SELECCIONADO</h1>
                <Card bg="info" border="dark" style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{id}</Card.Text>
                <Card.Text>{category}</Card.Text>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">${price}</Button>
                <ItemCount stock={10} cantidades={tomarCantidad}/>
                <button onClick={onAdd}>On add</button>
                </Card.Body>
                </Card>
                <h1>MAS PRODUCTOS</h1>
                <ItemListContainer/>
            </article>
    );

}
/*Exportacion*/
export default ItemDetail;