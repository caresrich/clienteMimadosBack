"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VentaPrenda = _database.db.define('ventaPrendas', {
  idVentaPrenda: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idVenta: {
    type: _sequelize["default"].INTEGER
  },
  idPrenda: {
    type: _sequelize["default"].INTEGER
  },
  detalle: {
    type: _sequelize["default"].TEXT
  },
  cantidad: {
    type: _sequelize["default"].INTEGER
  },
  precio: {
    type: _sequelize["default"].DECIMAL
  },
  estadoVenPre: {
    type: _sequelize["default"].BOOLEAN
  },
  fechaRegVenPre: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});

var _default = VentaPrenda;
exports["default"] = _default;