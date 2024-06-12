import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
const FormularioProductos = ({URL_BASE, funcionAEjecutar}) => {
    const [productos, setProductos] = useState({title: "", price: 0, description: ""});
    const [error, setError] = useState("");
    const {id} = useParams();
    const navegacion = useNavigate();
    const definirProductos = (valorNuevo, campo) =>{
        setProductos({...productos, [campo]: valorNuevo});
        
    }

    const procesarFuncion = (event) =>{
        event.preventDefault();
        funcionAEjecutar(productos, id);
        setProductos({title: "", price: 0, description: ""});
        setError("");
        navegacion("/");
        
    }
    return(
        <>
        <form onSubmit={procesarFuncion}>
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