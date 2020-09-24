const { Router } = require("express");
/**
 * Archivo: index.js
 * Descripcion: archivo responsable por llamar a la API de la aplicacion
 * fecha: 21/09/2020
 * Autor: Danilson Nunes
 */

const express = require("express");

const router = express.Router();

router.get("/api", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "sea bienvenido a la API de la trilha feliz",
    version: "1.0.0",
  });
});

module.exports = router;
