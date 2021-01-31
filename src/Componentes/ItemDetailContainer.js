import React , {useState, useEffect} from 'react'
import { useParams } from  'react-router-dom'
import ItemDetail from './ItemDetail'
import { firestore } from '../firebaseConfig'

// const products = [{
//     id: 1,
//     name: "Cuadro 1",
//     price: "1000",
//     image: "https://i.ibb.co/C96R3sn/imagen-21.jpg",
//     description: "Primero cuadro de nuestra coleccion",
//     stock: 9,
//     initial: 1,
//     categoryId: "Botanica",
//   },{
//     id: 2,
//     name: "Cuadro 2",
//     price: "1100",
//     image: "https://i.ibb.co/nsW7m7P/imagen-91.jpg",
//     description: "Segundo cuadro de nuestra coleccion",
//     stock: 5,
//     initial: 1,
//     categoryId: "Viajes",
//   },{
//     id: 3,
//     name: "Cuadro 3",
//     price: "1200",
//     image: "https://i.ibb.co/VMrz4kC/imagen-41.jpg",
//     description: "Tercer cuadro de nuestra coleccion",
//     stock: 6,
//     initial: 1,
//     categoryId: "Lineales",
//   }
//   ]

const ItemDetailContainer = () => {

    const [ item, setItem ] = useState()
    const { id } = useParams()


    useEffect(() => {
        const db = firestore
        const collection = db.collection("items")
        const item = collection.doc(id)
        
        item.get()
            .then( (i) => {
               setItem({ id: i.id, ...i.data()})
               
        })

    }, [id])
    

    return (
        <div>
            {item ? 
        <ItemDetail 
            item={item}
            id={item.id}
            name={item.name}     
            price={item.price}
            image={item.image}
            description={item.description}
            stock={item.stock}
            initial={item.initial}
             />
            : <p>Cargando items...</p>
            }
        </div>
    )
}

export default ItemDetailContainer
