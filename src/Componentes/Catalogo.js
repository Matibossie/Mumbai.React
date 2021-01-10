import React, {useState, useEffect} from "react";

const Listado = [
        {
           "id":1,
           "precio":"$1000",
           "imagen":"https://i.ibb.co/C96R3sn/imagen-21.jpg",
           "Nombre":"Mar"
        },
        {
           "id":2,
           "precio":"$1000",
           "imagen":"https://i.ibb.co/KNkmFrs/imagen-31.jpg",
           "Nombre":"Viajes"
        },
        {
           "id":3,
           "precio":"$6200",
           "imagen":"https://i.ibb.co/VMrz4kC/imagen-41.jpg",
           "Nombre":"Set de Lunas"
        },
        {
           "id":4,
           "precio":"$5400",
           "imagen":"https://i.ibb.co/hF6jHHJ/imagen-51.jpg",
           "Nombre":"Oceanico"
        },
        {
           "id":5,
           "precio":"$3600",
           "imagen":"https://i.ibb.co/xGfmKjH/imagen-61.jpg",
           "Nombre":"Tierra"
        },
        {
           "id":6,
           "precio":"$2500",
           "imagen":"https://i.ibb.co/vCFGF9h/imagen-71.jpg",
           "Nombre":"Desconexion"
        },
        {
           "id":7,
           "precio":"$1500",
           "imagen":"https://i.ibb.co/C96R3sn/imagen-81.jpg",
           "Nombre":"Bed & Breakfast"
        },
        {
           "id":8,
           "precio":"$2000",
           "imagen":"https://i.ibb.co/nsW7m7P/imagen-91.jpg",
           "Nombre":"Lineales"
        },
        {
           "id":9,
           "precio":"$3000",
           "imagen":"https://i.ibb.co/2nTjYy9/imagen-101.jpg",
           "Nombre":"Moda"
        },
        {
           "id":10,
           "precio":"$4000",
           "imagen":"https://i.ibb.co/B2P9yb0/imagen-111.jpg",
           "Nombre":"Infantil"
        }
  ];


  export default function App() {
    const [categorias, setCategorias] = useState([]);
  
    useEffect(() => {
      const Categorias = new Promise((resolver, rechazar) => {
        setTimeout(() => {
          // let resultado = true
          // if(resultado){
          resolver(Listado);
          // }else{
          // rechazar("Hubo un problema con las categorias")
          //}
        }, 2000);
      });
  
      Categorias.then(result => setCategorias(result)).catch(() => {
        console.log("Hubo un error");
      });
    }, [categorias]);
  
    return (
        <section>
            <h1 className="text-center"> Listado de productos </h1>
            <div className="contenedor-json">
            {(
            categorias.map(product => {
            
            return (
                
                    <div className="contenedor-producto">
                        <img src= {product.imagen} alt='description' height='200px' />
                        <p> {product.Nombre} </p>
                        <p> {product.precio} </p>
                    </div>
                
            );
            })
            )}
            </div>
            </section>
    );
  }
  
