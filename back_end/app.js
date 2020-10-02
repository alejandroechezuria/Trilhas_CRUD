/**
 * Archivo: app.js
 * Descripcion: archivo responsable por configuracion y ejecucion de la aplicacion
 * fecha: 21/09/2020
 * Autor: Danilson Nunes
 */
const express = require("express");
const cors = require("cors");

const app = express();

// ===> Rutas de la API
const index = require("./routes/index.js");
const trilhaRoute = require("./routes/trilhas.routes");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

app.use(index);
app.use("/api/", trilhaRoute);

module.exports = app;
