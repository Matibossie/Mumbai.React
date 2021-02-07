import React from 'react'
import {NavLink} from 'react-router-dom'
import SocialMedia from './SocialMedia'
import Carrito from './Carrito'
import {Navbar , Nav, NavDropdown } from 'react-bootstrap'
import Logo from '../img/logo.jpg'
import '../Clases/Header.css'
import '../Clases/sobreNosotros.css'
import '../Clases/utilidades.css'

const categories = [{
    categoryId: "Viajes",
},
{
    categoryId: "Novedades",
},{
    categoryId: "Infantiles",
}]

const Header = () => {
    
        return(
            <>
            <header className="header">
               <section className="header__logo text-center">
                   <div className="logotipo">
                        <NavLink className="logotipo" to="/" exact >
                            <img src={Logo} height="150px" alt="Logo"/>   
                        </NavLink>
                    </div>
                    <div className="social-media text-center icon-header">
                        <SocialMedia />
                    </div>  
                    <div className="carrito cartLogo">
                        <Carrito />
                    </div>
                </section>
                <section className="header__navegacion">
                    <Navbar collapseOnSelect expand="lg" >
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className=" mr-auto text-center">
                                <li><NavLink to="/Home" exact>Inicio</NavLink></li>
                                <li>
                                <NavDropdown title="Tienda" id="collasible-nav-dropdown">
                                      <NavLink to="/tienda" exact>Todos</NavLink>
                                    { categories.map ( category => <NavLink to={`/category/${category.categoryId}`}>{category.categoryId}</NavLink>) } 
                                </NavDropdown> 
                                </li> 
                                <li><NavLink to="/catalogo">Catálogo</NavLink></li>
                                <li><NavLink to="/nosotros">Sobre Nosotros</NavLink></li>
                                <li><NavLink to="/Home">Contactanos</NavLink></li>
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>
                                    
                           




                </section>
            </header>
            </>
        )
    }
    export default Header