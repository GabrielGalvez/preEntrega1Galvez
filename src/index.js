/*Importaciones*/
//Modulos
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//Estilos
import './index.css';
//Componentes
//import App from './App';
import NavBar from './components/navbar/NavBar.js';
import Home from './components/home/Home.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemCategoryContainer from './components/itemCategoryContainer/ItemCategoryContainer.js';
import AboutUs from './components/aboutUs/AboutUs.js';
import Footer from './components/footer/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
//Core
import reportWebVitals from './reportWebVitals';

/*Logica*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/productos' element={<ItemListContainer greeting='Estamos en la lista de productos'/>}/>
        <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>}/>
        <Route exact path='/categoria/:categoriaId' element={<ItemCategoryContainer/>}/>
        <Route exact path='/nosotros' element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
