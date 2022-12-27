/*Importaciones*/

//Modulos
//Estilos
import './NavBar.css';
import CartWidget from '../cartWidget/CartWidget.js';
//Componentes
//Core

/*Logica*/
const NavBar = (props) =>{//funcion constructora

    const fecha = new Date()
    //retorno que se va a renderizar
    return(
        <header className='container bg-dark bg-gradient text-primary'>
            <h1 className='d-flex justify-content-center'>Bienvenidos a AppGalvez </h1>
            <p>Fecha actual: {fecha.getDate()}</p>
            <ul className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <a href="" className="text-decoration-none">Home</a>
                <a href="" className="text-decoration-none">Producto</a>
                <a href="" className="text-decoration-none">Categoria</a>
                <a href="" className="text-decoration-none">Nosotros</a>
                <a href="" className="text-decoration-none">Carrito</a>
            </ul>
            <CartWidget cantidad = "10"/>
        </header>
    );

}
/*Exportacion*/
export default NavBar;