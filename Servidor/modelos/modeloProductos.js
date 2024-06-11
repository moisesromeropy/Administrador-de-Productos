const mongoose = require('mongoose');

const ColeccionProductos = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title es requerido"],
        minlength:[3, "Mínimo de 3 caracteres"]
    },
    price: {
        type: Number,
        required: [true, "Number is required"],
        min: [1, "Precio mínimo 1"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    }
});

const Producto = mongoose.model("Producto", ColeccionProductos);

module.exports = Producto;