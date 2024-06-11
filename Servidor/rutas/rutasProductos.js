const controladorProducto = require("./../controladores/controladorProducto");

module.exports = (app) =>{
    app.get('/api/productos', controladorProducto.todosLosProductos);
    app.post('/api/productos/agregar', controladorProducto.agregarProducto);
}
