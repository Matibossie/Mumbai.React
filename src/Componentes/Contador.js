import React, { useContext, useState } from 'react'
import {NavLink} from 'react-router-dom'
import '../Clases/contador.css'
import {CartContext} from './CartContext'


const Contador = ({item, id, aumentarContador, restarContador, cantidad}) => {
           
    const [ open, setOpen ] = useState(false)

    const {addToCart} = useContext (CartContext)

    function addAndOpen (item, cantidad, id){
        addToCart (item, cantidad, id);
        setOpen(true)
    }

    return (
        <div className="primera">
            <div className="segunda">
                <button className="botonContador margin" onClick={restarContador}>-</button>
                    <h3  className="margin">{cantidad}</h3>
                <button className="botonContador margin" onClick={aumentarContador}>+</button>
            </div>
            { /* Si open es false, que se muestre Agregar al Carrito, pero si es true, Terminar la compra*/}
            { !open ? (<div className="tercera">
                <button   className="BotonTienda" onClick={ () => addAndOpen(item, cantidad, id)}>
                  <h3>Agregar al carrito </h3>
                </button>
            </div>) : 
            (<NavLink to="/Cart">
                <button  className="BotonTienda" >
                    <h3>Terminar la compra</h3>
                </button>
            </NavLink>) }
        </div>
    )
}

export default Contador

