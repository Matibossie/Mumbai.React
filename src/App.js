import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route  } from "react-router-dom" 
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Switch from 'react-bootstrap/esm/Switch'
import Home from './Componentes/Home'
import Tienda from './Componentes/Tienda'
import ItemDetailContainer from './Componentes/ItemDetailContainer'
import Catalogo from './Componentes/Catalogo'
import Nosotros from './Componentes/Nosotros'
import Cart from './Componentes/Cart'
import CartProvider from '../src/Componentes/CartContext'
import { firestore } from './firebaseConfig'
import ProductoIndividual from './Componentes/ProductoIndividual'


const App = () => {

    const [ items, setItems] = useState([])

    useEffect(() => {

      const db = firestore
      const collection = db.collection("items")
      const query = collection.get()
      
      query
        .then(({docs}) => {
            
            setItems(docs.map(doc=>({id: doc.id,...doc.data()})))



            
            /* const arr = []

            docs.forEach(doc=>{
                
            const nuevoDoc = {
                id : doc.id, ...doc.data()
            }

            arr.push(nuevoDoc)
            })

            setItems(arr) */
        })
        .catch(() =>{
            console.log('fallo')
        })
    },[])

return(
    <CartProvider>
        <BrowserRouter>
            <Header />
            <Switch> 
                <Route exact path="/home"  >
                    <Home/>
                </Route>
                <Route exact path="/tienda" >
                    <Tienda products={items} />
                </Route>
                <Route exact path="/category/:id" >
                    <Tienda products={items}/>
                </Route>
                <Route exact path="/item/:id" >
                    <ItemDetailContainer/>
                </Route>
                <Route exact path="/Catalogo" >
                    <Catalogo/>
                </Route>
                <Route exact path="/Nosotros" >
                    <Nosotros/>
                </Route>
                <Route exact path="/Cart">
                    <Cart />
                </Route>
            </Switch> 
            <Footer />
        </BrowserRouter>
    </CartProvider>
    )
}

export default App