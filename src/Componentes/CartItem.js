import React, { useContext } from 'react'
import { CartContext } from './CartContext'

function CartItem( { id, name, image, price, amount }) {
    const { eliminateFromCart } = useContext(CartContext)

    return (
        <div className="BloqueItems flex">
            <div>    
                <img className="ImagenItem" src={image} alt={name} />
                <button className="EliminarItem" onClick={ () => eliminateFromCart(id )} >
                    X
                </button>
            </div>
            <div className="preCompra">    
                <h3>Producto: {name}</h3>
                <h4>Precio ${price}</h4>
                <h5>Cantidad: {amount}</h5>
                <h6>Sub Total ${amount * price}</h6>
            </div>
        </div>
    )
}

export default CartItem
