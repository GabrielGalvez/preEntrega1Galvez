/*Importaciones*/

//Modulos
//Estilos
import './ItemList.css';
//Componentes
import Item from '../item/Item.js';
//Core

/*Logica*/
const ItemList = () => {
        //llamada a array de objetos
    const listaDeProductos = [
        {
            id:1,
            nombre:"Monitor",
            descripcion:"blanco",
            precio:80000,
            categoria:"Hardware",
            stock:15
        },
        {
            id:2,
            nombre:"Mouse",
            descripcion:"logitech",
            precio:8000,
            categoria:"Hardware",
            stock:20
        },    
        {
            id:3,
            nombre:"adobe photoshop",
            descripcion:"Programa de diseño",
            precio:40000,
            categoria:"Software",
            stock:10
        },    
        {
            id:4,
            nombre:"Silla",
            descripcion:"muy comoda",
            precio:15000,
            categoria:"Mueble",
            stock:5
        },
    ]
//Tenemos un retraso de informacion

const listaDeProductosRenderizables = listaDeProductos.map(productos => <Item key={productos.id} 
    id={"Producto" + productos.id} data={productos}/>)
    //Pasar la informacion real
    //Mostrar la informacion real

    return(
            <div>
                <p>Mi ItemList,Gabriel Galvez</p>
                {listaDeProductosRenderizables}
            </div>
    );

}
/*Exportacion*/
export default ItemList;