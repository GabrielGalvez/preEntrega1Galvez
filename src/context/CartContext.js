//IMPORTACIONES
//useContext(permite utilizar el contexto creado),createContext(crear el contexto de la app) => react
import { useContext, createContext, useState } from "react";

//1ero crear el contexto       Valor dentro del argumento de la funcion es el valor por default del contexto
//2ndo exportar el contexto creado
export const CartContext = createContext([])

//3ero crear nuestra funcion para poder usar el contexto
//4rto podemos definirlo como un hook personalizado
//5to exportar la funcion que almacena el hook context
export const useCartContex = () => {return useContext(CartContext) }

//6to crear el componente del contexto proveedor
const CartProvider = ({children}) => {
//estado de CartProvider
    const [items, setItems] = useState([])

    //funciones de nuestro CartProvider
    console.log(items);

    const listaDeCarrito= () => {
        return items
    }

    const cantidadDeItemsEnElCarrito= () =>{
        return items.length
    }

    const agregarAlCarrito = (data) => {

        if(validarProductoExistente(data.id)){
            alert("El producto ya esta en el carrito")
        }else{
            const listaActual = items
            listaActual.push(data)
            setItems(listaActual)
            console.log(items);
        }
        
    }
    const borrarproductoDelCarrito = (id) =>{
        const nuevaLista = items.filter(e => e.id !== id)
        setItems(nuevaLista)
    }

    const limpiarCarrito = () =>{
        setItems([])
    }

    const validarProductoExistente = (id) =>{
        if(items.find(e => e.id === id)){
            return true
        }else{
            return false
        }
    }


    //render de mi CartProvider
    return(
        <CartContext.Provider value={{items, agregarAlCarrito}}>
                {children}
        </CartContext.Provider>
    )

}

export default CartProvider