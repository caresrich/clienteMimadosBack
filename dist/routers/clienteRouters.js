"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _clienteControllers = require("../controllers/clienteControllers");

var router = (0, _express.Router)();
//obtenet todos los clinetes
router.get('/', _clienteControllers.getAllClient); //crear un nuevo cliente
//router.post('/',createClient);
//obtener un solo cliente

router.get('/:id', _clienteControllers.getOneCliente); //delete cliente

router["delete"]('/:id', _clienteControllers.deleteClient); //update cliente

router.put('/:id', _clienteControllers.updateCliente); //searching a client

router.post('/buscar', _clienteControllers.searchClient); //createClienteExample

router.post('/', _clienteControllers.createClient);
var _default = router;
exports["default"] = _default;