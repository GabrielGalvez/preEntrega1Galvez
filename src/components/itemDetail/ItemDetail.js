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
import { useCartContex } from '../../context/CartContext.js';
//Core

/*Logica*/
const ItemDetail = (props) => {//funcion constructora

    const [cantidad, setCantidad] = useState(0)

    const { title, category, description, price, id } = props.data

    const { agregarAlCarrito } = useCartContex()

    const tomarCantidad = (numero) => {
        setCantidad(numero)
    }

    const onAdd = () => {

        if (cantidad !== 0) {
            const producto = {
                id: id,
                title: title,
                category: category,
                price: price,
                count: cantidad,
            }


            agregarAlCarrito(producto)
        }else{
            alert("No te olvides de agregar productos")
        }
    
    }


    //retorno que se va a renderizar
    return (
        <article>
            <h1>DETALLE DEL PRODUCTO SELECCIONADO</h1>
            <Card bg="info" border="dark" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{id}</Card.Text>
                    <Card.Text>{category}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary">${price}</Button>
                    <ItemCount stock={10} cantidades={tomarCantidad} />

                    <button onClick={onAdd}>On add</button>
                </Card.Body>
            </Card>
            <h1>MAS PRODUCTOS</h1>
            <ItemListContainer />
        </article>
    );

}
/*Exportacion*/
export default ItemDetail;