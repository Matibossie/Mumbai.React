import React, { useState } from 'react'
import Contador from './Contador'

const ItemDetail = ({producto,id,name,precio,detalle,imagen,categoria,stock, inicial}) => {    

// Este estado lo voy a usar para ir chequeando la cantidad de productos
    const [cantidad, setCantidad] = useState(inicial) 

// En este estado voy a guardar la información (producto y cantidad) cuando se cliquea "Agregar al Carrito"
    const [ cart, setCart ] = useState([])

// Este estado me va a servir para manejar si debo mostrar el botón "Agregar al carrito" o "terminar compra"
    const [ open, setOpen ] = useState(false)

    const aumentarContador = () => {
        if(cantidad < stock ) {
            setCantidad(cantidad + 1)  
        }
        else{ console.log("llegamos al stock")}
    }
    const restarContador = () => {
        if (cantidad > inicial){
            setCantidad(cantidad - 1)
        }
        else{ console.log("hay un solo item")}
    }

    // Cuando el usuario agrega al carrito voy a hacer dos cosas
    function agregarAlCarrito(producto) {

        console.log("Estas agregando " + cantidad + " al carrito")
        // Guardo en el estado cart el producto que eligió y la cantidad
        setCart(...cart, { id: producto.id, amount: cantidad })
        
        // Guardo en el estado que open sea true para mostrar "Terminar Compra" en lugar de "Agregar al carrito"
        setOpen(true)
    }

    return (
        <div className="contenedor text-center">
            <div className="producto">
                <h6>Categoría: {producto.categoria}</h6>
                <h2>{producto.name}</h2>
                <h3>${producto.precio}</h3>
                <img src={producto.imagen} alt=""/>
                <h6>{producto.detalle}</h6>
            </div>    
            <div>
                <Contador 
                    stock={producto.stock} 
                    inicial={1} 
                    aumentarContador={aumentarContador}
                    restarContador={restarContador}
                    cantidad={cantidad}
                    open={open}
                    agregarAlCarrito={agregarAlCarrito}
                    producto={producto}
                />
            </div>
        </div>
    )
}

export default ItemDetail