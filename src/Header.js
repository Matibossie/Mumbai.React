import React from 'react'

const Header = () => {
        return(
            <>
            <header class="header">
               <section class="header__logo text-center">
                    <a class="logotipo" href="index.html">
                        <img src="img/logo.jpg" height="150px" alt="Logo"/>   
                    </a>
                        <div class="social-header">
                        {/* a target="_blank"  rel="noopener"/> */}
                            <div class="icon icon-header"><a  href="https://www.instagram.com/mumbai.cuadros/"><img class="icon-social" src="img/icon/instagram.svg" alt="logo-instagram" /></a></div>
                            <div class="icon icon-header"><a  href="https://www.facebook.com/mumbai.cuadros"><img class="icon-social" src="img/icon/facebook.svg" alt="logo-facebook" /></a></div>
                            <div class="icon icon-header"><a  href="https://wa.link/1d4ggt"><img class="icon-social" src="img/icon/whatsapp.svg" alt="logo-whatsapp" /></a></div>
                            <div class="icon icon-header"><a  href="https://open.spotify.com/playlist/5odxXgNcI5NUerGLa0yGD3?si=jtO4ygPZQROUPo_aH6CYCA"><img class="icon-social" src="img/icon/spotify.svg" alt="logo-spotify" /></a></div>
                        </div>
                    <div class="carrito"> 
    				    <a href="tienda.html"><img src="img/icon/carrito.jpg" alt="logo-carrito"/></a>
    			    </div>
                </section>
                <section class="header__navegacion">
                    <nav class="header-resp">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 col-sm-12 col-xs-12"> 
                                    <nav class="navbar navbar-light light-blue lighten-4">
                                        <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i class="navbar-toggler-icon"></i></span></button>
                                        <div class="collapse navbar-collapse" id="navbarSupportedContent1"></div>
                                        <ul class="navbar-nav mr-auto text-center">
                                        <li class="nav-item active ">
                                            <a href="index.html">Inicio<span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="tienda.html">Tienda</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="catalogo.html">Catálogo</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="sobre-nosotros.html">Sobre nosotros</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="index.html#contacto">Contactanos</a>
                                        </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <nav class="header-nav text-center">
                        <a href="index.html">Inicio</a>
                        <a href="tienda.html">Tienda</a>
                        <a href="catalogo.html">Catálogo</a>
                        <a href="sobre-nosotros.html">Sobre nosotros</a>
                        <a href="index.html#contacto">Contactanos</a>
                    </nav>
                </section>
            </header>
            </>
        )
    }
    export default Header