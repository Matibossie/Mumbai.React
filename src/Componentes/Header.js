import React from 'react'
import {NavLink} from 'react-router-dom'
import SocialMedia from './SocialMedia'
import Carrito from './Carrito'
import {Navbar , Nav, NavDropdown } from 'react-bootstrap'
import Logo from '../img/logo.jpg'
import '../Clases/Header.css'
import '../Clases/sobreNosotros.css'
import '../Clases/utilidades.css'

const Header = () => {
        return(
            <>
            <header className="header">
               <section className="header__logo text-center">
                    <NavLink className="logotipo" to="/" exact >
                        <img src={Logo} height="150px" alt="Logo"/>   
                    </NavLink>
                    <div className="social-media text-center icon-header">
                        <SocialMedia />
                    </div>  
                        <Carrito />
                </section>
                <section className="header__navegacion">
                    <Navbar collapseOnSelect expand="lg" >
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className=" mr-auto text-center">
                                <li><NavLink to="/" exact>Inicio</NavLink></li>
                                <li>
                                <NavDropdown title="Tienda" id="collasible-nav-dropdown">
                                    <NavDropdown.Item>  <NavLink to="/tienda" exact>Todos</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/tienda/Home" exact>Home</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/tienda/Baby" exact>Baby</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/tienda/Movies" exact>Movies</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/tienda/Music" exact>Music</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/tienda/Games" exact>Games</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/tienda/Shoes" exact>Shoes</NavLink></NavDropdown.Item>
                                </NavDropdown> 
                                </li> 
                                <li><NavLink to="/catalogo">Catálogo</NavLink></li>
                                <li><NavLink to="/nosotros">Sobre Nosotros</NavLink></li>
                                <li><NavLink to="/">Contactanos</NavLink></li>
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>
                                    
                           




                </section>
            </header>
            </>
        )
    }
    export default Header