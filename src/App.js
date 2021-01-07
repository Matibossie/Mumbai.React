import React , {useState} from 'react'
import Header from './Componentes/Header'
import Contador from './Componentes/Contador'
import Main from './Componentes/Main'
import Catalogo from './Componentes/Catalogo'
import Footer from './Componentes/Footer'


export default function App () {

  const [cantidad, setCantidad] = useState(0) 

        const aumentarContador = () => {
            setCantidad(cantidad + 1)  }
        const restarContador = () => {
            if (cantidad===0){}else{        
            setCantidad(cantidad - 1) }  }
        const resetearContador = () => {
            setCantidad(0) }  
return(
    <>
        <Header  />
        <Main Nombre = "Matias"/>
        <Catalogo />
        <Contador 
            cantidad = {cantidad}
            restarContador = {restarContador}
            aumentarContador = {aumentarContador}
            resetearContador = {resetearContador}
        />
        <Footer />
    </>  
    )
}

