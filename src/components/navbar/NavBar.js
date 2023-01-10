/*Importaciones*/

//Modulos
//Estilos
import './NavBar.css';
import CartWidget from '../cartWidget/CartWidget.js';
//Componentes
//Core

/*Logica*/
const NavBar = (props) => {//funcion constructora

    const fecha = new Date()
    //retorno que se va a renderizar
    return (
        <header className='container bg-dark bg-gradient text-primary'>
            <h1 className='d-flex justify-content-center'>Bienvenidos a AppGalvez </h1>
            <p>Fecha actual: {fecha.getDate()}</p>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#a">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#a">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#a">Categoria</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#a">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#a">Carrito</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <CartWidget cantidad="10" />
        </header>
    );

}
/*Exportacion*/
export default NavBar;