import React from 'react'
import Contador from './Contador'

const cambiarValor = () => {
    console.log ("cambio el valor")
}


const ItemDetail = ({producto}) => {
  

    return (
        <div className="contenedor text-center">
            <div className="producto">
                <h6>Categoría: {producto.categoria}</h6>
                <h2>{producto.name}</h2>
                <h3>${producto.precio}</h3>
                <img src={producto.imagen} alt=""/>
                <h6>{producto.detalle}</h6>
            </div>    
                <Contador stock={producto.stock} inicial={1}/>
        </div>
    )
}

export default ItemDetail