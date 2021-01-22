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

const products = [{
    id: 1,
    name: "Cuadro 1",
    price: "1000",
    image: "https://i.ibb.co/C96R3sn/imagen-21.jpg",
    description: "Primero cuadro de nuestra coleccion",
    stock: 9,
    initial: 1,
    categoryId: "Botanica",
  },{
    id: 2,
    name: "Cuadro 2",
    price: "1100",
    image: "https://i.ibb.co/nsW7m7P/imagen-91.jpg",
    description: "Segundo cuadro de nuestra coleccion",
    stock: 5,
    initial: 1,
    categoryId: "Viajes",
  },{
    id: 3,
    name: "Cuadro 3",
    price: "1200",
    image: "https://i.ibb.co/VMrz4kC/imagen-41.jpg",
    description: "Tercer cuadro de nuestra coleccion",
    stock: 6,
    initial: 1,
    categoryId: "Lineales",
  }
  ]

const App = () => {

    const [ items, setItems] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolver, rechazar) => {
            setTimeout(function(){
                resolver(products)
            }, 2000);
        })
        promesa.then(result => setItems (result))
        promesa.catch(err=> console.log("Algo salio mal"))
    },[]);

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