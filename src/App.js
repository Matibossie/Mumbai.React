import React , {useState, useEffect} from 'react'
import Header from './Componentes/Header'
import Contador from './Componentes/Contador'
import Main from './Componentes/Main'
import Catalogo from './Componentes/Catalogo'
import Footer from './Componentes/Footer'


const Listado = [{
    nombre: "Frases"},{ 
    nombre: "Pantone"},{ 
    nombre: "Travel"},{ 
    nombre: "Lineales"}]

export default function App() {

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        
        const Categorias = new Promise((resolver, rechazar)=> {
        setTimeout(() => {
            // let resultado = true
            // if(resultado){
                resolver(Listado)
            // }else{
            // rechazar("Hubo un problema con las categorias")
            //}
        }, 2000)
    }
    )
    
    Categorias
    .then( result => setCategorias(result))

    .catch(()=> {
        console.log("Hubo un error")
        })
        
    }, [categorias])
        
    return (
        <>
            {categorias.map(product => <Catalogo nombre={product.nombre} />
                )}
        </>
    )
}



/*   const [cantidad, setCantidad] = useState(0) 

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
    </> */  