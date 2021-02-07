import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import carrito from '../img/icon/carrito.jpg'
import { CartContext }  from './CartContext'


function Carrito() {
    const { quantity } = useContext(CartContext)

    return (
        <>
        <div>
            <NavLink to="/cart"><img src={carrito} id="carrito" alt="carrito"/></NavLink>
        </div>
        <div className="cuentaCuadros">
            { quantity > 0 && <p className="SumaCarro contador">{quantity} </p> }
        </div>
        </>
            
    )
}

export default Carrito



 