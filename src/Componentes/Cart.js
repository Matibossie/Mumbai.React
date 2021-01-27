import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from './CartContext'
import CartItem from './CartItem'


const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext)

    return (
        <div className= "text-center">
            { cart.length > 0 
            ?
            (<h2 className="TituloCart" >Detalle del carrito</h2>)
            :
            (
            <>
            <h2>Aun no hay productos seleccionados</h2>
            <button className="BotonTienda" onClick={clearCart}> 
                    
            <NavLink to="/">Ir a comprar</NavLink>

            </button>
                
            </>
            )}

            <div className="ItemsCarrito">
                { cart.length > 0 && cart.map( product =>
                <CartItem key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                amount={product.amount} /> )}
            </div>

            { cart.length > 0 &&
            <>
            <h3>Precio total del carrito: ${total}</h3>
            <div>
            <button className="BotonTienda" ><NavLink to="/">Seguir comprando</NavLink></button>
                <button className=" BotonTienda" onClick={clearCart}>
                    Vaciar Carrito
                </button>
                <button className=" BotonTienda" onClick={() => {console.log(cart)}}> 
                    Terminar Compra
                </button>
            </div>
            </>}
        </div>
    )
}

export default Cart
