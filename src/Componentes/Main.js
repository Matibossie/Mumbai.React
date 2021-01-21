import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Tienda from './Tienda'
import Catalogo from './Catalogo'
import Nosotros from './Nosotros'
import '../Clases/Main.css'  
import ItemDetailContainer from './ItemDetailContainer'


const Main = () => {

return (
    <>
    <main>
            <Switch> 
                <Route exact path="/"  >
                    <Home Nombre = "Horacio"/>
                </Route>
                <Route exact path="/tienda" >
                    <Tienda/>
                </Route>
                <Route exact path="/tienda/:categoria" >
                    <Tienda/>
                </Route>
                <Route exact path="/producto/:id" >
                    <ItemDetailContainer/>
                </Route>
                <Route exact path="/Catalogo" >
                    <Catalogo/>
                </Route>
                <Route exact path="/Nosotros" >
                    <Nosotros/>
                </Route>
              {/*   <Route>
                    <Cart />
                </Route> */}
            </Switch>
    </main>
    </>
)
}

export default Main
