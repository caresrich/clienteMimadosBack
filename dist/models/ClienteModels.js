"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _VentaModels = _interopRequireDefault(require("./VentaModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Cliente = _database.db.define('clientes', {
  idCliente: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: _sequelize["default"].TEXT
  },
  apellidoP: {
    type: _sequelize["default"].TEXT
  },
  apellidoM: {
    type: _sequelize["default"].TEXT
  },
  estadoCli: {
    type: _sequelize["default"].BOOLEAN
  },
  fechaRegCli: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});

Cliente.hasMany(_VentaModels["default"], {
  foreignKey: 'idCliente'
});

_VentaModels["default"].belongsTo(Cliente, {
  foreignKey: 'idCliente'
});

var _default = Cliente;
exports["default"] = _default;