import React , {useState} from 'react'
import Header from './Componentes/Header/Header'
import Contador from './Componentes/Contador/Contador'
import Main from './Componentes/Main/Main'
import Catalogo from './Componentes/Catalogo/Catalogo'
import Footer from './Componentes/Footer/Footer'

const App = () => {

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

// export let Suma = cantidad 

export default App