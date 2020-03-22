"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _ventaPrendaModels = _interopRequireDefault(require("./ventaPrendaModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Venta = _database.db.define('ventas', {
  idVenta: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idCliente: {
    type: _sequelize["default"].INTEGER
  },
  montoCancelado: {
    type: _sequelize["default"].DECIMAL
  },
  estadoVen: {
    type: _sequelize["default"].BOOLEAN
  },
  fechaRegVen: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});

Venta.hasMany(_ventaPrendaModels["default"], {
  foreignKey: 'idVenta'
});

_ventaPrendaModels["default"].belongsTo(Venta, {
  foreignKey: 'idVenta'
});

var _default = Venta;
exports["default"] = _default;