"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _ventaControllers = require("../controllers/ventaControllers");

var router = (0, _express.Router)();
router.get('/', _ventaControllers.getAllVentas);
router.get('/:id', _ventaControllers.getSaldosByClient); //creating a new venta

router.post('/', _ventaControllers.createVenta); //obtener la ultima venta

router.get('/vender/:id', _ventaControllers.getUltimaVenta); //actulizar el monto cancelado a una venta

router.put('/actualizarMontoVenta/:id', _ventaControllers.updateMontoCancel); //updating  the state of venta

router.put('/actualizarEstadoVenta/:id', _ventaControllers.updateStateVenta);
var _default = router;
exports["default"] = _default;