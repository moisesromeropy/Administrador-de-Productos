import { useEffect, useState } from 'react';
import './App.css';
import FormularioProductos from './FormularioProductos/FormularioProductos';
import axios from 'axios';
import Productos from './Productos/Productos';
import { Routes, Route, Link } from 'react-router-dom';
import DetalleProducto from './DetalleProducto/DetalleProducto';
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

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Productos productos={productos} />} />
        <Route path="/:id" element={<DetalleProducto productos={productos} />} />
        <Route path="/nuevo" element={<FormularioProductos URL_BASE={URL_BASE} agregarAProductos={agregarAProductos} />}/>
        
      </Routes>
    </div>
  );
}

export default App;
