const {request} = require("express");
const Producto = require('./../modelos/modeloProductos');

module.exports.todosLosProductos = (req, res) =>{
    Producto.find()
    .then((productos)=>{
        return res.status(200).json(productos);
    })
    .catch((error) =>{
        return res.status(404).json({message: "Algo salió mal", error});
    })
}

module.exports.unProducto = (req,res) =>{
    const id = req.params.id;
    Producto.findOne({_id: id})
    .then((producto)=>{
        return res.status(200).json(producto);
    })
    .catch((error) =>{
        return res.status(404).json({message: "Algo salió mal", error});
    })
}

module.exports.agregarProducto = (req, res) =>{
    Producto.create(req.body)
    .then((producto)=>{
        return res.status(201).json(producto)
    })
    .catch((error)=>{
        return res.status(500).json({message:"Algo salió mal", error});
    })
}
