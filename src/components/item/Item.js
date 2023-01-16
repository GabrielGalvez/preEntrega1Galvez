/*Importaciones*/

//Modulos
import { Link } from 'react-router-dom';
//Estilos
import './Item.css';
//Componentes
import ItemCount from '../itemCount/ItemCount.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//Core

/*Logica*/
const Item = (props) =>{//funcion constructora

    const {title, category, description, price, id} = props.data
    return(
            <div>
                <Card bg="info" border="dark" style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{category}</Card.Text>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">${price}</Button>
                <Link to={`/producto/${id}`}>Ver detalle del producto</Link>
                <ItemCount stock={10}/>
                </Card.Body>
                </Card>
            </div>
    );

}
/*Exportacion*/
export default Item;