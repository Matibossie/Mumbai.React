import React from 'react'
import ProductoIndividual from './ProductoIndividual'

const Productos = ({productos}) => {

    return (
        <div className="contenedor-json">
            {productos.length > 0
            ? productos.map(res=>{
                
                return (
                    <ProductoIndividual key={res.id} id={res.id} name={res.name} precio={res.precio} imagen={res.imagen}/> 
                )
            })
            : <p>Cargando productos...</p>}
        </div>
    )
}

export default Productos
