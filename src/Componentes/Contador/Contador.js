import React from 'react'
import './contador.css'

const Contador = ({cantidad, aumentarContador, resetearContador}) => {
    return (
        <div className="text-center">
            <div className="text-center contador">{cantidad}</div>
            <button className="boton next" onClick={ aumentarContador }> Agregar Item </button>
            <button className="boton next" onClick={ resetearContador }> Reset </button>
        </div>


        )
    }

export default Contador
