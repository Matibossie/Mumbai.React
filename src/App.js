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


const App = () => {

    const [ items, setItems] = useState([])

    useEffect(() => {
      const db = firestore
      const collection = db.collection("items")
      const query = collection.get()
      
      query.then((resultado)=>{
        
        const items_array = resultado.docs

        items_array.forEach(item=>{
            
            const producto_final = {
                id : item.id,
                ...item.data()
            }
            setItems([...items, producto_final])
        })
    })
      .catch(()=>{ 
          console.log("fallo")
      })

    },[])

    

    // useEffect(() => {
    //     const promesa = new Promise((resolver, rechazar) => {
    //         setTimeout(function(){
    //             resolver(products)
    //         }, 2000);
    //     })
    //     promesa.then(result => setItems (result))
    //     promesa.catch(err=> console.log("Algo salio mal"))
    // },[]);

return(
    <CartProvider>
        <BrowserRouter>
            <Header />
            <Switch> 
                <Route exact path="/Home"  >
                    <Home Nombre = "Horacio"/>
                </Route>
                <Route exact path="/" >
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