import React from 'react'
import Contador from './Contador'


const ItemDetail = ({producto}) => {

    

    return (
        <div className="contenedor text-center">
                <h2>{producto.name}</h2>
                <h3>${producto.precio}</h3>
                <img src={producto.imagen} alt=""/>
                
                <Contador />
        </div>
    )
}

export default ItemDetail