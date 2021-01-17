import React from 'react'
import '../Clases/sobreNosotros.css'


const Nosotros = () => {
    return (
    <>
    <main class="contenedor">
        <section class="foto-texto"> 
            <div class="foto-sobre-nosotros">
                <img src="https://i.ibb.co/9nrhpHx/nosotros.jpg" alt="imagen sobre nosotros"height="150px"/> 
            </div>
            <div class="contenido textos">
                <h2>Hola! Somos Caro y Mati... </h2>
                <p>&nbsp;&nbsp;&nbsp;Yo, soy Licenciada en Publicidad y creativa incesante, por mi parte, soy Licenciado en Turismo y viajero empedernido. Y al igual que a todo el mundo, el Covid nos agarró con la guardia baja, sin herramientas, y en casa. Pero nosotros decidimos que quedarse quietos no era una alternativa. Así nació Mumbai, donde combinamos de una manera abstracta pasiones escondidas que salieron a la luz cuando menos lo esperábamos. 
                <br/><br/> 
                &nbsp;&nbsp;&nbsp;Mumbai no es solo un proyecto casero que tomó vida y de a poco se metió en el hogar de tantas personas, en Mumbai buscamos la perfección en cada vértice, la armonía de cada línea y la combinación perfecta entre los colores que componen nuestras obras. 
                <br/><br/>
                &nbsp;&nbsp;&nbsp;Los invitamos a seguirnos en nuestro&nbsp;
                <a class="text-link" target="_blank" href="https://www.instagram.com/mumbai.cuadros/" rel="noreferrer">Instagram</a>,
                darnos like en&nbsp;
                <a class="text-link" target="_blank" href="https://www.facebook.com/mumbai.cuadros" rel="noreferrer">Facebook</a>,
                y porque no, a seguir nuestra lista de reproducción en&nbsp;
                <a class="text-link" target="_blank" href="https://open.spotify.com/playlist/5odxXgNcI5NUerGLa0yGD3?si=jtO4ygPZQROUPo_aH6CYCA" rel="noreferrer">Spotify</a>,
                con la cual, nos inspiramos a la hora de diseñar, enmarcar y empaquetar cada pedido. 
                <span class="text-center"><br/><br/>Somos Mumbai Cuadros 
                <br/><i>Dos emprendedores más, que este contexto mundial no pudo frenar. </i></span></p>
            </div>	
        </section>
        <div class="contenido textos text-center">
            <h2>¡Encontranos en Instagram y conocé todas las novedades! </h2>
            <iframe title="Nuestro Instagram" width="315" height="450" src="https://www.instagram.com/p/CEQA6JShgvI/embed" frameborder="0">
            </iframe>
        </div>
    </main>
    </>
    )
}

export default Nosotros
