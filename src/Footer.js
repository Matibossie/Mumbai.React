import React from 'react'
import SocialMedia from './SocialMedia'

function Footer() {
    return (
        <>
        <footer class="contenedor-footer">
            <div class="footer-nav text-center">
                <nav class="nav">
                    <a href="index.html">Inicio <span class="separador">&nbsp-&nbsp</span></a>
                    <a href="pages/tienda.html">Tienda <span class="separador">&nbsp-&nbsp</span></a>
                    <a href="pages/catalogo.html">Catálogo <span class="separador">&nbsp-&nbsp</span></a>
                    <a href="pages/sobre-nosotros.html">Sobre nosotros <span class="separador">&nbsp-&nbsp</span></a>
                    <a href="index.html#contacto">Contactanos</a>
                </nav>
            </div>
            <div class="social-media text-center icon-footer">
            {/* target="_blank"  rel="noopener" */}
                <SocialMedia />
            </div>     	
            <div class="copyright text-center">
                <p class="mumbai">Mumbai Cuadros </p>
                <p class="derechos">Todos los derechos reservados - 2020</p>
            </div>
        </footer>
        </>
    )
}

export default Footer
