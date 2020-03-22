"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createVenta = createVenta;
exports.getUltimaVenta = getUltimaVenta;
exports.updateMontoCancel = updateMontoCancel;
exports.getAllVentas = getAllVentas;
exports.getSaldosByClient = getSaldosByClient;
exports.updateStateVenta = updateStateVenta;

var _VentaModels = _interopRequireDefault(require("../models/VentaModels"));

var _ClienteModels = _interopRequireDefault(require("../models/ClienteModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createVenta(_x, _x2) {
  return _createVenta.apply(this, arguments);
}

function _createVenta() {
  _createVenta = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var idCliente, v;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            idCliente = req.body.idCliente;
            console.log(idCliente); //es una forma de validar que no venga vacio el idCliente

            if (idCliente == "") {
              idCliente = null;
            }

            _context.prev = 3;
            _context.next = 6;
            return _VentaModels["default"].create({
              idCliente: idCliente,
              montoCancelado: 0,
              estadoVen: false,
              fechaRegVen: new Date()
            }, {
              fields: ['idCliente', 'montoCancelado', 'estadoVen', 'fechaRegVen']
            });

          case 6:
            v = _context.sent;

            if (v) {
              res.json({
                message: "Server: Venta Creada",
                //enviando exito para detectar en el frontend que la venta fue exitosa o no fue exitosa
                exito: true
              });
            }

            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);
            res.json({
              message: 'Server: Error al realizar la Venta',
              //enviando exito para detectar en el frontend que la venta fue exitosa o no fue exitosa
              exito: false
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 10]]);
  }));
  return _createVenta.apply(this, arguments);
}

;

function getUltimaVenta(_x3, _x4) {
  return _getUltimaVenta.apply(this, arguments);
}

function _getUltimaVenta() {
  _getUltimaVenta = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id, v;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _VentaModels["default"].findAll({
              where: {
                idCliente: id
              },
              include: [_ClienteModels["default"]]
            });

          case 4:
            v = _context2.sent;

            if (!v) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json(v[v.length - 1]));

          case 7:
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            res.json({
              message: "Server: Error al Obtener el Ultimo Registro"
            });

          case 12:
            ;

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _getUltimaVenta.apply(this, arguments);
}

; //agrega el monto de precio a una venta que ya fue creada anteriormente

function updateMontoCancel(_x5, _x6) {
  return _updateMontoCancel.apply(this, arguments);
}

function _updateMontoCancel() {
  _updateMontoCancel = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, montoCancelado, v;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            montoCancelado = req.body.montoCancelado;
            console.log(montoCancelado);
            _context3.prev = 3;
            _context3.next = 6;
            return _VentaModels["default"].findOne({
              where: {
                idVenta: id
              }
            });

          case 6:
            v = _context3.sent;

            if (!v) {
              _context3.next = 10;
              break;
            }

            v.update({
              montoCancelado: montoCancelado
            });
            return _context3.abrupt("return", res.json({
              message: "Server: Monto Cancelado Añadido",
              exito: true
            }));

          case 10:
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](3);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.json({
              message: "Server: Error al añadir el monto cancelado",
              exito: false
            }));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 12]]);
  }));
  return _updateMontoCancel.apply(this, arguments);
}

;

function getAllVentas(_x7, _x8) {
  return _getAllVentas.apply(this, arguments);
}

function _getAllVentas() {
  _getAllVentas = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var allVentas;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _VentaModels["default"].findAll({
              include: [_ClienteModels["default"]]
            });

          case 3:
            allVentas = _context4.sent;

            if (!allVentas) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", res.json(allVentas));

          case 6:
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            res.json({
              message: 'error al obtener todos los ventas',
              data: _context4.t0
            });

          case 11:
            ;

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _getAllVentas.apply(this, arguments);
}

;

function getSaldosByClient(_x9, _x10) {
  return _getSaldosByClient.apply(this, arguments);
}

function _getSaldosByClient() {
  _getSaldosByClient = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id, ventas, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return _VentaModels["default"].findAll({
              //attributes:['idVenta','idCliente','estadoVen','fechaRegVen'],
              where: {
                idCliente: id
              }
            });

          case 3:
            ventas = _context5.sent;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context5.prev = 7;

            for (_iterator = ventas[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              v = _step.value;
              console.log(v.idVenta);
            }

            _context5.next = 15;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](7);
            _didIteratorError = true;
            _iteratorError = _context5.t0;

          case 15:
            _context5.prev = 15;
            _context5.prev = 16;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 18:
            _context5.prev = 18;

            if (!_didIteratorError) {
              _context5.next = 21;
              break;
            }

            throw _iteratorError;

          case 21:
            return _context5.finish(18);

          case 22:
            return _context5.finish(15);

          case 23:
            res.json(ventas);

          case 24:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[7, 11, 15, 23], [16,, 18, 22]]);
  }));
  return _getSaldosByClient.apply(this, arguments);
}

;

function updateStateVenta(_x11, _x12) {
  return _updateStateVenta.apply(this, arguments);
}

function _updateStateVenta() {
  _updateStateVenta = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var id, estadoVen, v;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            estadoVen = req.body.estadoVen;
            _context6.prev = 2;
            _context6.next = 5;
            return _VentaModels["default"].findOne({
              where: {
                idVenta: id
              }
            });

          case 5:
            v = _context6.sent;

            if (!v) {
              _context6.next = 9;
              break;
            }

            v.update({
              estadoVen: estadoVen
            });
            return _context6.abrupt("return", res.json({
              message: 'Server: Estado de Venta Actualizado'
            }));

          case 9:
            ;
            _context6.next = 15;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](2);
            res.json({
              message: 'ocurrio un error al actualizar el Estado',
              err: _context6.t0
            });

          case 15:
            ;

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 12]]);
  }));
  return _updateStateVenta.apply(this, arguments);
}

;