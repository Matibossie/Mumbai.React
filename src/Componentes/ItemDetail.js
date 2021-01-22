import React, { useState } from 'react'
import Contador from './Contador'

const ItemDetail = ({ item, id, name, image, description, stock, initial, price}) => {    

const [cantidad, setCantidad] = useState(initial) 

    const aumentarContador = () => {
        if(cantidad < stock ) {
            setCantidad(cantidad + 1)  
        }
        else{ console.log("llegamos al stock")}
    }

    const restarContador = () => {
        if (cantidad > initial){
            setCantidad(cantidad - 1)
        }
        else{ console.log("hay un solo item")}
    }

    /* // En este estado voy a guardar la información (producto y cantidad) cuando se cliquea "Agregar al Carrito"
    

// Este estado me va a servir para manejar si debo mostrar el botón "Agregar al carrito" o "terminar compra"
     */

/*     // Cuando el usuario agrega al carrito voy a hacer dos cosas
    function agregarAlCarrito(producto) {

        console.log("Estas agregando " + cantidad + " al carrito")
        // Guardo en el estado cart el producto que eligió y la cantidad
        setCart(...cart, { id: producto.id, amount: cantidad })
        
        // Guardo en el estado que open sea true para mostrar "Terminar Compra" en lugar de "Agregar al carrito"
        setOpen(true)
    } */

    return (
        <div className="contenedor text-center">
            <div className="producto">
                <h6>Categoría: {item.categoryId}</h6>
                <h2>{item.name}</h2>
                <h3>${item.price}</h3>
                <img src={item.image} alt=""/>
                <h6>{item.description}</h6>
            </div>    
            <div>
                <Contador 
                    stock={item.stock} 
                    initial={initial} 
                    aumentarContador={aumentarContador}
                    restarContador={restarContador}
                    cantidad={cantidad}
                    item={item}
                />
            </div>

        </div>
    )
}

export default ItemDetail