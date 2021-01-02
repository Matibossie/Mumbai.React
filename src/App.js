import React , {useState} from 'react'
import Header from './Componentes/Header/Header'
import Contador from './Componentes/Contador/Contador'
import Main from './Componentes/Main/Main'
import Footer from './Componentes/Footer/Footer'

const App = () => {

    const [cantidad, setCantidad] = useState(0) 

        const aumentarContador = () => {
            setCantidad(cantidad + 1)  }
        const resetearContador = () => {
            setCantidad(0) }  
return(
    <>
        <Header  />
        <Main Nombre = "Matias"/>
        <Contador 
            cantidad = {cantidad}
            aumentarContador = {aumentarContador}
            resetearContador = {resetearContador}
        />
        <Footer />
    </>
)
}

// export let Suma = cantidad 

export default App