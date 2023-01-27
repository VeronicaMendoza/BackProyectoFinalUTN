import { Router } from "express";
import {
  getProductos,
  getProducto,
  createProducto,
  deleteProducto,
  updateProducto,
} from "../controllers/productos.controllers.js";

const router = Router();

//Obtiene todos los productos
router.get("/productos", getProductos);

//Obtiene un solo producto
router.get("/productos/:id", getProducto);

// Crea un Producto
router.post("/productos", createProducto);

//Actualiza el Producto
router.put("/productos/:id", updateProducto);

// Elimina el Producto
router.delete("/productos/:id", deleteProducto);

export default router;
