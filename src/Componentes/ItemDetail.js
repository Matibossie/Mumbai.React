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


    return (
        <div className="contenedor text-center">
            <div className="producto">
                <img src={item.image} alt=""/>
            </div>    
            <div className="preCompra">
                <h2>{item.name}</h2>
                <h6>Categoría: {item.categoryId}</h6>
                <h3>${item.price}</h3>
                <h5>{item.description}</h5>
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