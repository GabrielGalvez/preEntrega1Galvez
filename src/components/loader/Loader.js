/*Importaciones*/

//Modulos
import { useEffect, useState } from 'react';
//Estilos
import './Loader.css';
//Componentes
//Core

/*Logica*/
const Loader = () => {//funcion constructora

    const [cargando, setCargando] = useState(true)

    useEffect = (() => {
        setTimeout(() => {
            setCargando(false)
        }, 5000)
    }, [])



    /*
    Metodo 1 -> Condicional simple con if fuera del return
    */

    if (cargando) {
        //render
        return (
            
            <div className='loader-padding'>
                Loader...
            </div>

        )
    }else{
        return (
            
            <div className='loader-padding'>
                La carga ha sido completada.
            </div>

        )
    }





}
/*Exportacion*/
export default Loader;