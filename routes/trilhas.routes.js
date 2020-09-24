/**
 * Archivo: routes/trilhas.routes.js
 * Descripcion: archivo responsable por rutas de la API
 * fecha: 22/09/2020
 * Autor: Danilson Nunes
 */

const router = require("express-promise-router")();
const trilhasController = require("../controllers/trilhas.controller");

// ===> definiendo las rutas del CRUD

// ===> ruta responsable por agregar una nueva trilha a la base de datos (POST): localhost:3000/api/trilhas
router.post("/trilhas", trilhasController.createTrilha);

// ==> ruta responsable por listar todas las trilhas (GET): localhost:3000/api/trilhas
router.get("/trilhas", trilhasController.listAllTrilhas);

module.exports = router;
