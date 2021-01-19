import React , {useState, useEffect} from 'react'
import { useParams } from  'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise((resolver, rechazar) => {
            setTimeout(function(){
                resolver(fetch("https://5ffb864463ea2f0017bdb238.mockapi.io/api/v1/articulos"))
            }, 2000);
        })
        promesa
        .then(res=>res.json())
        .then(res=>{
            if(id){
                setProducto(res.find(res=>res.id===id))
            }       
        })
        .catch(err=>{ 
            console.log(err)
        }) 
    },[id])

    return (
        <div>
            {producto
            ? <ItemDetail 
            producto={producto}
            id={producto.id}
            name={producto.name}
            precio={producto.precio}
            detalle={producto.detalle}
            imagen={producto.imagen}
            categoria={producto.categoria}
            stock={10}
            inicial={1}
             />
            : <p>Cargando productos...</p>
            }
        </div>
    )
}

export default ItemDetailContainer
