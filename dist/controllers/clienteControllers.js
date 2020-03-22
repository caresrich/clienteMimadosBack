"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllClient = getAllClient;
exports.createClient = createClient;
exports.getOneCliente = getOneCliente;
exports.deleteClient = deleteClient;
exports.updateCliente = updateCliente;
exports.searchClient = searchClient;

var _ClienteModels = _interopRequireDefault(require("../models/ClienteModels"));

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getAllClient(_x, _x2) {
  return _getAllClient.apply(this, arguments);
}

function _getAllClient() {
  _getAllClient = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var clientes;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _ClienteModels["default"].findAll();

          case 3:
            clientes = _context.sent;

            if (!clientes) {
              _context.next = 7;
              break;
            }

            clientes.reverse();
            return _context.abrupt("return", res.json(clientes));

          case 7:
            ;
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.json({
              message: 'error al obtener los clientes'
            });

          case 13:
            ;

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));
  return _getAllClient.apply(this, arguments);
}

; //ejmeplo de registro de un cliente

function createClient(_x3, _x4) {
  return _createClient.apply(this, arguments);
}

function _createClient() {
  _createClient = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, nombre, apellidoP, apellidoM, c;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, apellidoP = _req$body.apellidoP, apellidoM = _req$body.apellidoM; //este codigo es una forma de validar el nombre,ya que react envia los datos siempre como ""
            //los inputs y al convertir en null no se acpta el registro a la DB

            if (nombre == "") {
              nombre = null;
            }

            ;
            _context2.prev = 3;
            _context2.next = 6;
            return _ClienteModels["default"].create({
              nombre: nombre,
              apellidoP: apellidoP,
              apellidoM: apellidoM,
              estadoCli: true,
              fechaRegCli: new Date()
            }, {
              fields: ['nombre', 'apellidoP', 'apellidoM', 'estadoCli', 'fechaRegCli']
            });

          case 6:
            c = _context2.sent;

            if (!c) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.json({
              id: c.idCliente,
              message: 'Cliente Registrado'
            }));

          case 9:
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](3);
            res.json({
              message: 'ERROR..! No se pudo registrar el Cliente',
              err: _context2.t0
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 11]]);
  }));
  return _createClient.apply(this, arguments);
}

;

function getOneCliente(_x5, _x6) {
  return _getOneCliente.apply(this, arguments);
}

function _getOneCliente() {
  _getOneCliente = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, cliente;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            //la siguiente linea de codigo comentado tambien obtiene el id, pero es mas veloz el restructuring
            //const id = req.params.id;
            id = req.params.id; //restructuring

            _context3.next = 4;
            return _ClienteModels["default"].findOne({
              where: {
                idCliente: id
              }
            });

          case 4:
            cliente = _context3.sent;

            if (!cliente) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json(cliente));

          case 7:
            ;
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            res.json({
              message: 'error al obtener el cliente',
              err: _context3.t0
            });

          case 13:
            ;

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return _getOneCliente.apply(this, arguments);
}

;

function deleteClient(_x7, _x8) {
  return _deleteClient.apply(this, arguments);
}

function _deleteClient() {
  _deleteClient = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, countDelete;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _ClienteModels["default"].destroy({
              where: {
                idCliente: id
              }
            });

          case 4:
            countDelete = _context4.sent;
            res.json({
              message: 'Server: Cliente Eliminado',
              count: countDelete
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            res.json({
              message: 'Server: Error al Eliminar el Cliente'
            });

          case 11:
            ;

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _deleteClient.apply(this, arguments);
}

;

function updateCliente(_x9, _x10) {
  return _updateCliente.apply(this, arguments);
}

function _updateCliente() {
  _updateCliente = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, nombre, apellidoP, apellidoM, estado, c;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, apellidoP = _req$body2.apellidoP, apellidoM = _req$body2.apellidoM, estado = _req$body2.estado;
            console.log('este es el nombre' + nombre);
            _context5.prev = 3;
            _context5.next = 6;
            return _ClienteModels["default"].findOne({
              where: {
                idCliente: id
              }
            });

          case 6:
            c = _context5.sent;

            if (!c) {
              _context5.next = 10;
              break;
            }

            c.update({
              nombre: nombre,
              apellidoP: apellidoP,
              apellidoM: apellidoM,
              estado: estado
            });
            return _context5.abrupt("return", res.json({
              message: 'Server: Cliente Actualizado'
            }));

          case 10:
            ;
            _context5.next = 16;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](3);
            res.json({
              message: 'ocurrio un error al actualizar',
              err: _context5.t0
            });

          case 16:
            ;

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 13]]);
  }));
  return _updateCliente.apply(this, arguments);
}

;

function searchClient(_x11, _x12) {
  return _searchClient.apply(this, arguments);
}

function _searchClient() {
  _searchClient = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var op, c, client;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            //sequelize have a method whith name Op permite to operations of consults
            op = _sequelize["default"].Op;
            c = req.body.nombre;
            console.log(c);
            _context6.prev = 3;
            _context6.next = 6;
            return _ClienteModels["default"].findAll({
              where: _defineProperty({}, op.or, {
                nombre: _defineProperty({}, op.like, "%".concat(c, "%")),
                idCliente: _defineProperty({}, op.like, "%".concat(c, "%")),
                apellidoP: _defineProperty({}, op.like, "%".concat(c, "%"))
              })
            });

          case 6:
            client = _context6.sent;

            if (!client) {
              _context6.next = 10;
              break;
            }

            client.reverse();
            return _context6.abrupt("return", res.json(client));

          case 10:
            _context6.next = 15;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](3);
            return _context6.abrupt("return", res.json({
              message: 'Server: Error al Obtener Data',
              error: c
            }));

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[3, 12]]);
  }));
  return _searchClient.apply(this, arguments);
}

;