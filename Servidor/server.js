const express = require('express');
const app = express();
const cors = require("cors");
const rutaProducto = require('./rutas/rutasProductos');
require('./configuracion/configuracion');

app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

rutaProducto(app);


app.listen(8000, () => {
    console.log("Listening at Port 8000")
});

