import React from 'react'
import {NavLink} from 'react-router-dom'
import carrito from '../img/icon/carrito.jpg'


function Carrito() {
    return (
    <>
    <div className="carrito">
        <div className="carrito"> 
            <NavLink to="/tienda"><img src={carrito} alt="carrito"/></NavLink>
        </div>
        <div>
   
        </div>
    </div>
    </>
    )
}

export default Carrito



 