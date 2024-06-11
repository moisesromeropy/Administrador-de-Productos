import { Link, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const DetalleProducto = ({productos}) => {
    const parametros = useParams();
    const id = parametros.id;
    
    return(
        <>
        <h1>Detalle de Producto</h1>
        {productos.map((producto, index)=>{
            if(producto._id === id){
                return(
                    <div key={index}>
                        <h3>{producto.title.charAt(0).toUpperCase() + producto.title.slice(1)}</h3>
                        <h3>Precio: {producto.price}gs.</h3>
                        <h3>Categoria: {producto.description.charAt(0).toUpperCase() + producto.description.slice(1)}</h3>
                    </div>
            )}
        })}
        <Link to="/"> Lista de Productos </Link> - <Link to="/nuevo"> Agregar Producto </Link>
        </>
    )
}

export default DetalleProducto;