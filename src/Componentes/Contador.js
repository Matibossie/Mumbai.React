import React, { useState } from 'react'
import '../Clases/contador.css'
import Input from './Input'



const Contador = ({stock, inicial}) => {
    
    const [cantidad, setCantidad] = useState(inicial) 

    const cambiarValor = valorNuevo => {
        setCantidad(valorNuevo)
    }

    

    
        const aumentarContador = (e) => {
            if(cantidad < stock ) {
                setCantidad(cantidad + 1)  
                //console.log(cantidad)
            }
            //console.log(cantidad)
        }
        const restarContador = (e) => {
            if (cantidad > 0){
                setCantidad(cantidad - 1)
                //console.log(cantidad)
            }
        }
        console.log(cantidad)
        
        

        /* 
 
        <Contador 
            cantidad = {cantidad}
            restarContador = {restarContador}
            aumentarContador = {aumentarContador}
            resetearContador = {resetearContador}
        /> */


        const onAdd = () => {
            console.log(cantidad)
        }

        
        
    return (
        <div className="text-center">
            <p> Stock : {stock} </p>
            <button  onClick={aumentarContador} className={`boton next ${cantidad === stock ? "disabled" : null}`} >+</button>
          
            <Input cambiarValor={cambiarValor} value={cantidad}/>  
           
           {/* INPUT PROVISORIO */}
            <br/>
            <br/>
            <input type="number" onChange={cambiarValor} value={cantidad} />


            <button onClick={restarContador} className={`boton next ${cantidad === 0 ? "disabled" : null}`}>-</button>
            <button onClick={onAdd} className="boton next" > Agregar al carrito </button>

{/* <ItemDetail cambiarCantidad={cambiarCantidad} />*/}      
        </div>
        ) 
    }
    
export default Contador

