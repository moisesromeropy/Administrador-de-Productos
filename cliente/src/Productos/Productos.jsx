import { Link, useNavigate } from 'react-router-dom';

const Productos = ({productos}) =>{
    const navegacion = useNavigate();
    const irADetalleProducto = (id) => {
        navegacion(`/${id}`);
    }
    return(
        <>
        <Link to="/nuevo"> Agregar Producto </Link>
        <h1>Lista de Productos</h1>
        <ul>
            {productos.map((producto, index)=>(
             <button key={index} onClick={(e)=> irADetalleProducto(producto._id)}><li >{producto.title}</li></button>   
            ))}
        </ul>
        </>
    )
}

export default Productos;