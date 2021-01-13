import React from 'react'
import {BrowserRouter} from "react-router-dom" 
import Header from './Componentes/Header'
import Main from './Componentes/Main'
import Home from './Componentes/Home'
import Footer from './Componentes/Footer'


const App = () => {

    
return(
    <BrowserRouter>
        <Header />
        <Main />
        <Footer />
    </BrowserRouter>  
    )
}

export default App