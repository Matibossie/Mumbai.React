import React, { useState } from 'react'
import '../Clases/contador.css'



const Contador = ({stock, inicial}) => {

    const [cantidad, setCantidad] = useState(inicial) 

        const aumentarContador = () => {
            if(cantidad < stock ) {
                setCantidad(cantidad + 1)  
            }
        }
        const restarContador = () => {
            if (cantidad > 0){
                setCantidad(cantidad - 1)
            }
        }
        

        /* 
 
        <Contador 
            cantidad = {cantidad}
            restarContador = {restarContador}
            aumentarContador = {aumentarContador}
            resetearContador = {resetearContador}
        /> */


        const onAdd = () => {

        }


        
    return (
        <div className="text-center">
            <p> Stock : {stock} </p>
            <button  onClick={aumentarContador} className={`boton next ${cantidad === stock ? "disabled" : null}`} > 
                + 
            </button>
            <div 
                className="text-center contador">{cantidad}    
            </div>
            <button onClick={restarContador} className={`boton next ${cantidad === 0 ? "disabled" : null}`}> 
                - 
            </button>

            <button onClick={onAdd} className="boton next" > Agregar al carrito </button>
        </div>


        )
    }
    
export default Contador

