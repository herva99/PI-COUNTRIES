const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();
//sirve para ver las consultas en la consola.
server.use(morgan("dev"));
//sirve para comprender los datos en formato JSON.
server.use(express.json());
//es un mecanismo basado en cabeceras HTTP que permite a un servidor
// indicar cualquier dominio, esquema o puerto
server.use(cors());
//sirve para saber la existencia de las rutas.
server.use(router);

module.exports = server;
