const controladorProducto = require("./../controladores/controladorProducto");

module.exports = (app) =>{
    app.get('/api/productos', controladorProducto.todosLosProductos);
    app.get('/api/productos/:id', controladorProducto.unProducto);
    app.post('/api/productos/agregar', controladorProducto.agregarProducto);
    app.put('/api/productos/editar/:id', controladorProducto.actualizarProducto);
    app.delete('/api/productos/borrar/:id', controladorProducto.borrarProducto);
}
