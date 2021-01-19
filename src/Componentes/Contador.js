import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Clases/contador.css'
/* import Input from './Input'
 */
const Contador = ({stock, inicial, aumentarContador, restarContador, cantidad, open, agregarAlCarrito, producto}) => {
           
    return (
        <div className="">
            <div className="">
                <button onClick={restarContador}>-</button>
                    <h3>{cantidad}</h3>
                <button onClick={aumentarContador}>+</button>
            </div>
            { /* Si open es false, que se muestre Agregar al Carrito, pero si es true, Terminar la compra*/}
            { !open ? (<div className="">
                <button onClick={ () => agregarAlCarrito(producto)}>
                  <h3>Agregar al carrito </h3>
                </button>
            </div>) : 
            (<NavLink to="/Checkout"><button >
            <h3>Terminar la compra</h3>
          </button></NavLink>) }
            
        </div>
    )
}

export default Contador

