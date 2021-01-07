import React from 'react'
import '../Clases/SocialMedia.css'
import Facebook from '../img/icon/facebook.svg'
import Instagram from '../img/icon/instagram.svg'
import Whatsapp from '../img/icon/whatsapp.svg'
import Spotify from '../img/icon/spotify.svg'


function SocialMedia() {
    return (
    <>    
           <div className="icon"><a target="_blank"  rel="noreferrer" href="https://www.instagram.com/mumbai.cuadros/"><img className="icon-social" src={Instagram} alt="logo-instagram" /></a></div>
           <div className="icon"><a target="_blank"  rel="noreferrer" href="https://www.facebook.com/mumbai.cuadros"><img className="icon-social" src={Facebook} alt="logo-facebook" /></a></div>
           <div className="icon"><a target="_blank"  rel="noreferrer" href="https://wa.link/1d4ggt"><img className="icon-social" src={Whatsapp} alt="logo-whatsapp" /></a></div>
           <div className="icon"><a target="_blank"  rel="noreferrer" href="https://open.spotify.com/playlist/5odxXgNcI5NUerGLa0yGD3?si=jtO4ygPZQROUPo_aH6CYCA"><img className="icon-social" src={Spotify} alt="logo-spotify" /></a></div>
    </>   
    )
}
export default SocialMedia

