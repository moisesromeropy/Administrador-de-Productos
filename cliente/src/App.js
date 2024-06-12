import { useEffect, useState } from 'react';
import './App.css';
import FormularioProductos from './FormularioProductos/FormularioProductos';
import axios from 'axios';
import Productos from './Productos/Productos';
import { Routes, Route, Link } from 'react-router-dom';
import DetalleProducto from './DetalleProducto/DetalleProducto';
import FormularioEditarProducto from './FormularioEditarProducto/FormularioEditarProducto';
function App() {
  const URL_BASE = "http://localhost:8000/api";
  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    const cargarProductos = () =>{
      axios.get(`${URL_BASE}/productos`)
      .then(function (response) {
        console.log(response.data);
        setProductos(response.data);
      })
      .catch(function (error) {
        console.log(error);
        console.log("hola")
      });
    }
    cargarProductos();
  }, [])

  const agregarAProductos = (nuevoProducto) =>{
    setProductos([...productos, nuevoProducto]);
  }

  const editarProductos = (productoAEditar) =>{
    const indice = productos.findIndex((producto) => producto._id === productoAEditar._id);
    const productosActualizados = [...productos];
    productosActualizados[indice].title = productoAEditar.title;
    productosActualizados[indice].price = productoAEditar.price;
    productosActualizados[indice].description = productoAEditar.description;
    setProductos(productosActualizados);
  }

  const borrarProductos = (id) => {
    const indice = productos.findIndex((producto) => producto._id === id);
    const productosActualizados = [...productos];
    productosActualizados.splice(indice, 1);
    setProductos(productosActualizados);
  }

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Productos productos={productos} URL_BASE={URL_BASE} borrarProductos={borrarProductos}/>} />
        <Route path="/:id" element={<DetalleProducto productos={productos} />} />
        <Route path="/nuevo" element={<FormularioProductos URL_BASE={URL_BASE} agregarAProductos={agregarAProductos} />}/>
        <Route path="/:id/editar" element={<FormularioEditarProducto URL_BASE={URL_BASE} editarProductos={editarProductos}/>}/>
      </Routes>
    </div>
  );
}

export default App;
