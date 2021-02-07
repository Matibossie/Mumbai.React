import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductoIndividual = ({id, name, image, price}) => {
    return (
        <div className="contenedor-producto">
            <h3 className="titulo">{name}</h3>
            <p className="precio">${price}</p>
            <NavLink 
                className="text-center" 
                to={`/item/${id}`}
            >
                <img src={image} 
                    alt="alt" 
                    height="350px"
                />
            </NavLink>
        </div>
    )
}

export default ProductoIndividual


