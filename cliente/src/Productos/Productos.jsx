import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Productos = ({productos, borrarProductos, URL_BASE}) =>{
    const navegacion = useNavigate();
    const [error, setError] = useState("");
    const irADetalleProducto = (id) => {
        navegacion(`/${id}`);
    }
    const irAEditar = (id) => {
        navegacion(`/${id}/editar`);
    }
    const removerProducto = (id) => {
        const url = `${URL_BASE}/productos/borrar/${id}`;
        axios.delete(url)
        .then((response) => {
            console.log(response);
            borrarProductos(id);
            setError("");
          })
          .catch((error) => {
            console.log(error);
            setError(error);
          });
    }
    return(
        <>
        <Link to="/nuevo"> Agregar Producto </Link>
        <h1>Lista de Productos</h1>
        <ul style={{ listStyleType: 'none' }}>
            {productos.map((producto, index)=>(
             <li key={index}>
                {producto.title}
                <button onClick={(e)=> irADetalleProducto(producto._id)}>Ver</button>
                <button onClick={(e)=> irAEditar(producto._id)}>Editar</button>
                <button onClick={(e) => removerProducto(producto._id)}>Borrar</button>    
            </li>
            ))}
        </ul>
        </>
    )
}

export default Productos;