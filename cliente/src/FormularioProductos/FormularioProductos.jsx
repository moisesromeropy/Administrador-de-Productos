import React, { useState } from 'react';
import axios from 'axios';
const FormularioProductos = ({URL_BASE}) => {
    const [productos, setProductos] = useState({title: "", price: 0, description: ""});
    const [error, setError] = useState("");
    const definirProductos = (valorNuevo, campo) =>{
        setProductos({...productos, [campo]: valorNuevo});
        
    }

    const agregarEstudiante = (event) =>{
        event.preventDefault();
        const url = `${URL_BASE}/productos/agregar`;
        axios.post(url, 
            productos,
            {
                headers:{
                    'Content-Type':'application/json'
                }
            }
        )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
            setError(error);
          });
        
    }
    return(
        <>
        <form onSubmit={agregarEstudiante}>
            <label htmlFor="title">Title</label>
            <input value={productos.title} onChange={(e) => definirProductos(e.target.value, "title")} type="text"/>
            <label htmlFor="price">Price</label>
            <input value={productos.price} onChange={(e) => definirProductos(e.target.value, "price")} type="number" />
            <label htmlFor="description">Description</label>
            <input value={productos.description} onChange={(e) => definirProductos(e.target.value, "description")} type="text" />
            <button>Enviar</button>
        </form>
        </>
    )
}

export default FormularioProductos;