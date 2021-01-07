import React, {useState, useEffect} from "react";

const Listado = [
    {
      nombre: "Frases"    },
    {
      nombre: "Pantone"    },
    {
      nombre: "Travel"    },
    {
      nombre: "Lineales"    }
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
      <>
        {categorias.map(product => (
          <Catalogo nombre={product.nombre} />
        ))}
      </>
    );
  }
  
  
  function Catalogo({ nombre }) {
    return <h2>{nombre}</h2>;
  }
  
  