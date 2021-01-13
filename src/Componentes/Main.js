import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Tienda from './Tienda'
import Catalogo from './Catalogo'
import Nosotros from './Nosotros'
import Productos from './Productos'
import '../Clases/Main.css'  
import DetalleContenedorItem from './DetalleContenedorItem'

const Main = ({Nombre}) => {

    return (
        <>
        <main>
        <Switch>
            <Route path="/" exact >
                <Home/>
            </Route>
            <Route path="/Tienda">
                <Tienda/>
            </Route>
            <Route path="/Catalogo">
                <Catalogo/>
            </Route>
            <Route path="/Nosotros">
                <Nosotros/>
            </Route>
            <Route path="/Tienda/:categoria">
                <Tienda/> 
            </Route>
            <Route path="/">
                <Tienda/> 
            </Route>
            <Route path="/producto/:id">
                <DetalleContenedorItem/> 
            </Route>

        </Switch>
            {/* <div className="encabezado">
                <h2 className="text-center"><b>¡Hola {Nombre}!</b> <br/>Te invitamos a ver nuestros Productos</h2>
            </div> */}

        </main>
        </>
    )
}

export default Main
