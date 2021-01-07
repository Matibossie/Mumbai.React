import React from 'react'
import '../Clases/contador.css'

const Contador = ({cantidad, aumentarContador, resetearContador, restarContador}) => {
    return (
        <div className="text-center">
            <div className="text-center contador">{cantidad}</div>
            <button className="boton next" onClick={ aumentarContador }> Agregar Item </button>
            <button className="boton next" onClick={ resetearContador }> Reset </button>
            <button className="boton next" onClick={ restarContador }> Quitar Item </button>
        </div>


        )
    }
    
export default Contador

