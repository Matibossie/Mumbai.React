import React from 'react'
import ProductoIndividual from './ProductoIndividual'

const Productos = ({items}) => {

    return (
        <div className="contenedor-json">
            { items.map(product=> <ProductoIndividual key={product.id} id={product.id} name={product.name} precio={product.precio} imagen={product.imagen}/>)
            }
            </div>
    )
}

export default Productos
