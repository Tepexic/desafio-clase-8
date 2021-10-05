const express = require("express");
const { Router } = express;

const Contenedor = require("./../utils/Contenedeor");
const Productos = new Contenedor("./routes/data/productos.json");
isIdValid = require("./../utils/helpers");

const productosRouter = Router();

const errorMsg = { error: "producto no encontrado" };

productosRouter.get("/", async (req, res) => {
  const productos = await Productos.getAll();
  res.json(productos);
});

productosRouter.get("/:id", async (req, res) => {
  // mensaje de error
  const id = parseInt(req.params.id);
  // consulta solo si el is es válido
  if (!isNaN(id) && id !== null) {
    const producto = await Productos.getById(id);
    if (producto) return res.json(producto);
    // error si no se encontró
    res.status(404);
    return res.json(errorMsg);
  }
  // error si no es un id valido
  res.status(404);
  return res.json(errorMsg);
});

productosRouter.post("/", async (req, res) => {
  const productoNuevo = req.body;
  const newId = await Productos.save(productoNuevo);
  res.status(201);
  res.send({
    message: "success",
    data: { id: newId, ...productoNuevo },
  });
});

productosRouter.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await Productos.updateById(id, req.body);
  if (result) {
    res.status(201);
    res.send({
      message: "success",
      data: { ...req.body },
    });
  } else {
    res.status(404);
    res.send(errorMsg);
  }
});

productosRouter.delete("/:id", async (req, res) => {
  // mensaje de error
  const id = parseInt(req.params.id);
  // consulta solo si el is es válido
  if (isIdValid(id)) {
    const result = await Productos.deleteById(id);
    if (result) return res.json({ result: "success" });
    // error si no se encontró
    res.status(400);
    return res.json(errorMsg);
  }
  // error si no es un id valido
  res.status(404);
  return res.json(errorMsg);
});

module.exports = productosRouter;
