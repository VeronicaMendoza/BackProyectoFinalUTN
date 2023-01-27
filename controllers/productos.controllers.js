import { pool } from "../db.js";

export const getProductos = async (req, res) => {
  ;
  try {
    const [result] = await pool.query(
      "SELECT * FROM productos ORDER BY createAt ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProducto = async (req, res) => {
  
  try {
    const [result] = await pool.query("SELECT * FROM productos WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Producto not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProducto = async (req, res) => {

  try {
    const { nombre, precio, descripcion } = req.body;
    const [result] = await pool.query(
      "INSERT INTO productos(nombre, precio, descripcion) VALUES (?, ?, ?)",
      [nombre, precio, descripcion]
    );
    res.json({
      id: result.insertId,
      nombre,
      precio,
      descripcion,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProducto = async (req, res) => {

  try {
    const result = await pool.query("UPDATE productos SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProducto = async (req, res) => {
 
  try {
    const [result] = await pool.query("DELETE FROM productos WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Producto no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};