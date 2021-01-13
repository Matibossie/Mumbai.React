import React , {useState, useEffect} from 'react'
import { useParams } from  'react-router-dom'
import Productos from './Productos'


const Tienda = () => {

    const [productos, setProductos] = useState([])
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
                setProductos(res.filter(res=>res.categoria===id))
            }else{
                setProductos(res)
            }       
        })
        .catch(err=>{
            console.log(err)
        })
    },[id])
    
    return (
        <div>

            <Productos productos={productos}/>

        </div> 
    )
}

export default Tienda
