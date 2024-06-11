import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const FormularioProductos = ({URL_BASE, agregarAProductos}) => {
    const [productos, setProductos] = useState({title: "", price: 0, description: ""});
    const [error, setError] = useState("");
    const navegacion = useNavigate();
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
            agregarAProductos(response.data);
            setProductos({title: "", price: 0, description: ""});
            setError("");
            navegacion("/");
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
            <input value={productos.title} id='title' name='title' onChange={(e) => definirProductos(e.target.value, "title")} type="text"/>
            <label htmlFor="price">Price</label>
            <input value={productos.price} id='price' name='price' onChange={(e) => definirProductos(e.target.value, "price")} type="number" />
            <label htmlFor="description">Description</label>
            <input value={productos.description} id='description' name='description' onChange={(e) => definirProductos(e.target.value, "description")} type="text" />
            <button>Enviar</button>
        </form>
         
        </>
    )
}

export default FormularioProductos;