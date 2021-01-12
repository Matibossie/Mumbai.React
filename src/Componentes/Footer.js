import React from 'react'
import {NavLink} from 'react-router-dom'
import SocialMedia from './SocialMedia'
import '../Clases/footer.css'

function Footer() {
    return (
        <>
        <footer className="contenedor-footer">
            <div className="footer-nav text-center">
                <nav className="nav">
                <li><NavLink to="/" exact>Inicio<span className="separador">&nbsp;-&nbsp;</span></NavLink></li>
                <li><NavLink to="/tienda">Tienda<span className="separador">&nbsp;-&nbsp;</span></NavLink></li>
                <li><NavLink to="/catalogo">Catálogo<span className="separador">&nbsp;-&nbsp;</span></NavLink></li>
                <li><NavLink to="/nosotros">Sobre nosotros<span className="separador">&nbsp;-&nbsp;</span></NavLink></li>
                <li><NavLink to="/contactanos">Contactanos</NavLink></li>
                </nav>
            </div>


            
            <div className="social-media text-center icon-footer">
                <SocialMedia />
            </div>  

            <div className="copyright text-center">
                <p className="mumbai">Mumbai Cuadros </p>
                <p className="derechos">Todos los derechos reservados - 2020</p>
            </div>
        </footer>
        </>
    )
}

export default Footer
