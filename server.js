/**
 * Archivo: server.js
 * Descripcion: archivo responsable por la configuracion del ambiente de ejecucion
 * fecha: 21/09/2020
 * Autor: Danilson Nunes
 */

const app = require("./app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("aplicacion ejecutandose en la puerta: ", port);
});
