import React from 'react'
import { BrowserRouter  } from "react-router-dom" 
import Header from './Componentes/Header'
import Main from './Componentes/Main'
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