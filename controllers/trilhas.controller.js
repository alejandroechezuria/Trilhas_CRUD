/**
 * Archivo: controllers/trilhass.controller.js
 * Descripcion: archivo responsable por la logica de las rutas
 * fecha: 22/09/2020
 * Autor: Danilson Nunes
 */

const db = require("../config/database");

// ===> metodo responsable por dar entrada a una nueva trilha

exports.createTrilha = async (req, res) => {
  const { nome, descripcion } = req.body;
  const {
    rows,
  } = await db.query("INSERT INTO trilhas (nome, descripcion) VALUES($1, $2)", [
    nome,
    descripcion,
  ]);

  res.status(201).send({
    message: "Trilha registrada satisfactoriamente!",
    body: {
      Trilha: { nome, descripcion },
    },
  });
};

// ===> metodo responsable por listar todas las trilhas

exports.listAllTrilhas = async (req, res) => {
  const response = await db.query("SELECT * FROM trilhas ORDER BY nome ASC");
  res.status(200).send(response.rows);
};
