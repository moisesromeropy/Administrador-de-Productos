import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
const FormularioEditarProducto = (props) => {
    const {URL_BASE, editarProductos} = props;
    const [productos, setProductos] = useState({title: "", price: 0, description: ""});
    const [error, setError] = useState("");
    const {id} = useParams();
    const navegacion = useNavigate();
    const definirProductos = (valorNuevo, campo) =>{
        setProductos({...productos, [campo]: valorNuevo});
    }
    const actualizarProducto = (event)=>{
        event.preventDefault();
        const url = `${URL_BASE}/productos/editar/${id}`;
        axios.put(url, 
            productos,
            {
                headers:{
                    'Content-Type':'application/json'
                }
            }
        )
          .then((response) => {
            console.log(response);
            editarProductos(response.data);
            setProductos({title: "", price: 0, description: ""});
            setError("");
            navegacion("/");
          })
          .catch((error) => {
            console.log(error);
            setError(error);
          });
    }
    return(
        <>
         <form onSubmit={actualizarProducto}>
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

export default FormularioEditarProducto;