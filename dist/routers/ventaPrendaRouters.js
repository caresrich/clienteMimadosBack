"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _ventaPrendaControllers = require("../controllers/ventaPrendaControllers");

var router = (0, _express.Router)();
router.post('/:id', _ventaPrendaControllers.createNewVenta);
router.get('/:id', _ventaPrendaControllers.getVentasForClient);
var _default = router;
exports["default"] = _default;