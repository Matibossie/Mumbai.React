import React, { useState } from 'react'
import '../Clases/contador.css'



const Contador = () => {

    const [cantidad, setCantidad] = useState(0) 

        const aumentarContador = () => {
            setCantidad(cantidad + 1)  }
        const restarContador = () => {
            if (cantidad===0){}else{        
            setCantidad(cantidad - 1) }  }
        const resetearContador = () => {
            setCantidad(0) }  

 
        <Contador 
            cantidad = {cantidad}
            restarContador = {restarContador}
            aumentarContador = {aumentarContador}
            resetearContador = {resetearContador}
        />

        
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

