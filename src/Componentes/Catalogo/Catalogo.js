import React from 'react'

const promesa = new Promise((resolver, rechazar)=>{

    setTimeout(() => {
        
        console.log("termino el pedido")

        let resultado = true
        let categorias = ["Frases", "Pantone", "Travel", "Lineales"]
        
        if(resultado){
            resolver(categorias)
        }else{
            rechazar("Hubo un problema con las categorias")
        }
    }, 2000)
})

promesa
.then((resultado) =>{
    console.log("Salio todo bien")
    console.log(resultado)
})
.catch(()=>{
    console.log("Hubo un error")
})

function Catalogo() {
    return (
        <div>
            
        </div>
    )
}

export default Catalogo
