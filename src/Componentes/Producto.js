import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'

const Producto = () => {
    const parametros = useParams()
    const id = parametros.id

    useEffect(() =>{

    })

    return (
        <div>
            <h2 className="text-center">Detalle del producto</h2>


            <h4 className="text-center">ACA ME FALTA TRAER DE ALGUNA MANERA 
            A PRODUCTO.JS EL DETALLE DEL PRODUCTO</h4>


        </div>
    )
}

export default Producto
