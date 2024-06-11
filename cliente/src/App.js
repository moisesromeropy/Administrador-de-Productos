import './App.css';
import FormularioProductos from './FormularioProductos/FormularioProductos';

function App() {
  const URL_BASE = "http://localhost:8000/api";
  return (
    <div className="App">
      <FormularioProductos URL_BASE={URL_BASE} />
    </div>
  );
}

export default App;
