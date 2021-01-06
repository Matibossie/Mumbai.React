import React , { useEffect, useState } from 'react'

const Catalogo = ({}) => {

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        const Categorias = new Promise((resolver, rechazar)=> {
        setTimeout(() => {
            let resultado = true
            let categorias = ["Frases", "Pantone", "Travel", "Lineales"]
            
            if(resultado){
                resolver(categorias)
            }else{
                rechazar("Hubo un problema con las categorias")
            }
        }, 2000)
    })
    
    Categorias
    .then((resultado) =>{
        console.log("Salio todo bien")
        console.log(resultado)   
        setCategorias(categorias)     
        })
    .catch(()=> {
        console.log("Hubo un error")
        })
        
    }, [] )

    
    return (
        <div>
            <h2>Listado de productos</h2>
            {Catalogo.length > 0 
            ? Catalogo.map((Catalogo) => {
                return (
                    <p>{categorias}</p>
                )
            })
            : <p> no hay </p>}
            </div>
    )
}

export default Catalogo


