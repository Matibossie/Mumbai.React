import React from 'react'

const Main = ({Nombre}) => {


    return (
        <>
        <main>
            <div class="encabezado">
                <h2 class="text-center"><b>¡Hola {Nombre}!</b> <br/>Te invitamos a ver nuestros Productos</h2>
            </div>

            <section class="overflow">	
                    <div class="flipster">
                        {/* <ul class="flip-items">
                            <li id="2"> <img src="../img/tienda/imagen-21.jpg"  alt="nuestrosProductos"/></li>
                            <li id="3"> <img src="img/tienda/imagen-31.jpg"  alt="nuestrosProductos"/></li>
                            <li id="4"> <img src="img/tienda/imagen-41.jpg"  alt="nuestrosProductos"/></li>
                            <li id="5"> <img src="img/tienda/imagen-51.jpg"  alt="nuestrosProductos"/></li>
                            <li id="6"> <img src="img/tienda/imagen-61.jpg"  alt="nuestrosProductos"/></li>
                            <li id="7"> <img src="img/tienda/imagen-71.jpg"  alt="nuestrosProductos"/></li>
                            <li id="8"> <img src="img/tienda/imagen-81.jpg"  alt="nuestrosProductos"/></li>
                            <li id="9"> <img src="img/tienda/imagen-91.jpg"  alt="nuestrosProductos"/></li>
                            <li id="10"><img src="img/tienda/imagen-101.jpg" alt="nuestrosProductos"/></li>
                            <li id="11"><img src="img/tienda/imagen-111.jpg" alt="nuestrosProductos"/></li>
                            <li id="2"> <img src="img/tienda/imagen-21.jpg"  alt="nuestrosProductos"/></li>
                            <li id="3"> <img src="img/tienda/imagen-31.jpg"  alt="nuestrosProductos"/></li>
                            <li id="4"> <img src="img/tienda/imagen-41.jpg"  alt="nuestrosProductos"/></li>
                            <li id="5"> <img src="img/tienda/imagen-51.jpg"  alt="nuestrosProductos"/></li>
                            <li id="6"> <img src="img/tienda/imagen-61.jpg"  alt="nuestrosProductos"/></li>
                            <li id="7"> <img src="img/tienda/imagen-71.jpg"  alt="nuestrosProductos"/></li>
                            <li id="8"> <img src="img/tienda/imagen-81.jpg"  alt="nuestrosProductos"/></li>
                            <li id="9"> <img src="img/tienda/imagen-91.jpg"  alt="nuestrosProductos"/></li>
                            <li id="10"><img src="img/tienda/imagen-101.jpg" alt="nuestrosProductos"/></li>
                            <li id="11"><img src="img/tienda/imagen-111.jpg" alt="nuestrosProductos"/></li>                           
                        </ul> */}
                    </div>
            <div class="boton">
                <a href="pages/catalogo.html" class="titulos">Acceder al catálogo completo</a>
            </div>	
            </section>	

            <section class="contenedor">
                <div class="sobre-nosotros">
                    <div class="foto-sobre-nosotros foto-sobre-nosotros-index">
                        <img src="img/nosotros.jpg" alt="imagen sobre nosotros"height="150px"/> 
                            <div class="textos">
                                <h2 class="text-start">Sobre Nosotros.</h2>
                                <p class="text-justify">Somos Mumbai Cuadros, y nuestra misión es estar presentes en cada rincón de tu hogar.&nbspPor eso hoy más que nunca, que nuestros espacios son donde pasamos el mayor tiempo del día, queremos que luzca como a vos te gusta.&nbspGracias por acompañanos en este proyecto que hacemos con tanta vocación y gracias también, por permitirnos estar cerca tuyo, en esos lugares especiales, que cobraron vida gracias a un cuadro de Mumbai.
                                    <div class="leer-mas">
                                        <a class="leer-mas" href="pages/sobre-nosotros.html"> ¿Querés conocernos más? </a>
                                    </div>		
                                </p>
                            </div>
                    </div>
                </div>
                <div class="caja-contactanos">
                    <h2 class="formulario textos text-center" id= "contacto">Contactanos</h2>
                        <div class="contactanos">
                            <div class="contactanos__padre1">
                                <div class="caja-form">
                                    <form class="whatsapp-form">
                                        <div class="datainput">
                                            <input class="validate" id="wa_name" name="name" required="" type="text" value=''/>
                                            <span class="highlight"></span><span class="bar"></span>
                                            <label>Hola Mumbai! Mi nombre es </label>
                                        </div>
                                        <div class="datainput">
                                            <textarea id='wa_textarea' placeholder='' maxlength='5000' row='1' required=""></textarea>
                                            <span class="highlight"></span><span class="bar"></span>
                                            <label>Quiero consultar por </label>
                                        </div>
                                        <div class="caja-enviar boton boton-wpp">	
                                            <img src="img/icon/whatsappw.png" alt="logo-whatsapp"/>		
                                            <a class="send_form" href="javascript:void" type="submit" title="Send to Whatsapp">Enviar a Whatsapp</a>
                                        </div>
                                        <div id="text-info"></div>
                                    </form>
                                </div>
                            </div>			
                            <div class="contactanos__padre2">
                                <div class="imagen-form">
                                    <img src="img/fotoform.jpg" alt="imagen formulario"/> 
                                </div>
                            </div>	
                        </div>
                </div>		
            </section>
        </main>
        </>
    )
}

export default Main
