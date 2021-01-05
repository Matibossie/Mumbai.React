import React from 'react'
import SocialMedia from '../socialMedia/SocialMedia'
import Carrito from './Carrito'
import './Header.css'
import '../sobreNosotros/sobreNosotros.css'
import '../addClases/utilidades.css'
import Navbar from 'react-bootstrap/Navbar'
import { Nav} from 'react-bootstrap';
import Logo from '../../img/logo.jpg'

const Header = () => {
        return(
            <>
            <header className="header">
               <section className="header__logo text-center">
                    <a className="logotipo" href="index.html">
                        <img src={Logo} height="150px" alt="Logo"/>   
                    </a>
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
                                <Nav.Link href="#features">Inicio</Nav.Link>
                                <Nav.Link href="#pricing">Tienda</Nav.Link>
                                <Nav.Link href="#deets">Catálogo</Nav.Link>
                                <Nav.Link href="#deets">Sobre Nosotros</Nav.Link>
                                <Nav.Link href="#deets">Contactanos</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>
                </section>
            </header>
            </>
        )
    }
    export default Header