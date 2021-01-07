import React from 'react'
import SocialMedia from './SocialMedia'
import '../Clases/footer.css'

function Footer() {
    return (
        <>
        <footer className="contenedor-footer">
            <div className="footer-nav text-center">
                <nav className="nav">
                    <a href="index.html">Inicio<span className="separador">&nbsp;-&nbsp;</span></a>
                    <a href="pages/tienda.html">Tienda<span className="separador">&nbsp;-&nbsp;</span></a>
                    <a href="pages/catalogo.html">Catálogo<span className="separador">&nbsp;-&nbsp;</span></a>
                    <a href="pages/sobre-nosotros.html">Sobre nosotros<span className="separador">&nbsp;-&nbsp;</span></a>
                    <a href="index.html#contacto">Contactanos</a>
                </nav>
            </div>
            <div className="social-media text-center icon-footer">
            {/* target="_blank"  rel="noopener" */}
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
