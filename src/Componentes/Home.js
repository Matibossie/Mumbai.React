import React from 'react'
import {NavLink} from 'react-router-dom'


const Home = ({Nombre}) => {
    return (
        <>
        
            <div className="encabezado">
                <h2 className="text-center"><b>¡Hola {Nombre}!</b> <br/>Te invitamos a ver nuestros Productos</h2>
            </div> 
            <section className="contenedor">
            <div className="boton">
                <NavLink to="/catalogo" className="titulos">Acceder al catálogo completo</NavLink>
            </div>	
            <div className="sobre-nosotros">
                <div className="foto-sobre-nosotros foto-sobre-nosotros-index">
                    <img src="https://i.ibb.co/9nrhpHx/nosotros.jpg" alt="imagen sobre nosotros"height="150px"/> 
                        <div className="textos">
                            <h2 className="text-start">Sobre Nosotros.</h2>
                            <p className="text-justify">Somos Mumbai Cuadros, y nuestra misión es estar presentes en cada rincón de tu hogar. Por eso hoy más que nunca, que nuestros espacios son donde pasamos el mayor tiempo del día, queremos que luzca como a vos te gusta. Gracias por acompañanos en este proyecto que hacemos con tanta vocación y gracias también, por permitirnos estar cerca tuyo, en esos lugares especiales, que cobraron vida gracias a un cuadro de Mumbai.
                                <div className="leer-mas">
                                    <NavLink className="leer-mas" to="/nosotros"> ¿Querés conocernos más? </NavLink>
                                </div>		
                            </p>
                        </div>
                </div>
            </div>
            <div className="caja-contactanos">
                <h2 className="formulario textos text-center" id= "contacto">Contactanos</h2>
                <div className="contactanos">
                    <div className="contactanos__padre1">
                        <div className="caja-form">
                            <form className="whatsapp-form">
                                <div className="datainput">
                                    <input className="validate" id="wa_name" name="name" required="" type="text" value=''/>
                                    <span className="highlight"></span><span className="bar"></span>
                                    <label>Hola Mumbai! Mi nombre es </label>
                                </div>
                                <div className="datainput">
                                    <textarea id='wa_textarea' placeholder='' maxlength='5000' row='1' required=""></textarea>
                                    <span className="highlight"></span><span className="bar"></span>
                                    <label>Quiero consultar por </label>
                                </div>
                                <div className="caja-enviar boton boton-wpp">	
                                    <img src="https://i.ibb.co/N6dsJLh/whatsappw.png" alt="logo-whatsapp"/>		
                                    <a className="send_form" href="/" type="submit" title="Send to Whatsapp">Enviar a Whatsapp</a>
                                </div>
                                <div id="text-info"></div>
                            </form>
                        </div>
                    </div>			
                    <div className="contactanos__padre2">
                        <div className="imagen-form">
                            <img src="https://i.ibb.co/TH8KFJ6/fotoform.jpg" alt="imagen formulario"/> 
                        </div>
                    </div>	
                </div>
            </div>		
            </section>
        </>
    )
}

export default Home
