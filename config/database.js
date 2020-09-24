/**
 * Archivo: database.js
 * Descripcion: archivo responsable por las 'connectionStrings' de la aplicacion.
 * fecha: 22/09/2020
 * Autor: Danilson Nunes
 */

const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

// ==> conexion con la base de datos

const pool = new Pool({
  coneconnectionString: process.env.DATABASE_URL,
});

pool.on("error", (err, client) => {
  console.log("unexpected error on idle client", err);
  process.exit(-1);
});

pool.on("conect", () => {
  console.log("Base de datos conectada sastifactoriamente!");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
