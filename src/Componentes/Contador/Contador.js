import React from 'react'

const Contador = ({cantidad, aumentarContador, resetearContador}) => {
    return (
        <div>
            <div className="text-center">{cantidad}</div>
            <button className="boton next" onClick={ aumentarContador }> Agregar Item </button>
            <button className="boton next" onClick={ resetearContador }> Reset </button>
        </div>


        )
    }

export default Contador
