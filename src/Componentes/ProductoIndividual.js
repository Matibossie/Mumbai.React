import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductoIndividual = ({name, precio, id, imagen}) => {
    return (
        <div className="contenedor-producto">
            <h3>{name}</h3>
            <p>${precio}</p>
            <NavLink className="text-center" to={`/producto/${id}`}><img src={imagen} alt="alt" height="250px"/></NavLink>
        </div>
    )
}

export default ProductoIndividual


