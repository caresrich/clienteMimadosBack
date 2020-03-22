"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewVenta = createNewVenta;
exports.getVentasForClient = getVentasForClient;

var _ventaPrendaModels = _interopRequireDefault(require("../models/ventaPrendaModels"));

var _VentaModels = _interopRequireDefault(require("../models/VentaModels"));

var _ClienteModels = _interopRequireDefault(require("../models/ClienteModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createNewVenta(_x, _x2) {
  return _createNewVenta.apply(this, arguments);
}

function _createNewVenta() {
  _createNewVenta = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var id, montoCancelado, v, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, i, newVenta;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            montoCancelado = req.body.montoCancelado.montoCancelado;
            console.log("eeeeeeeeeeeeeeste es el monto cancelado" + montoCancelado);

            //es una forma de validar que no venga vacio el idCliente
            if (id == "") {
              id = (_readOnlyError("id"), null);
            }

            _context.prev = 4;
            _context.next = 7;
            return _VentaModels["default"].create({
              idCliente: id,
              montoCancelado: montoCancelado,
              estadoVen: false,
              fechaRegVen: new Date()
            }, {
              fields: ['idCliente', 'montoCancelado', 'estadoVen', 'fechaRegVen']
            });

          case 7:
            v = _context.sent;

            if (!v) {
              _context.next = 43;
              break;
            }

            _context.prev = 9;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 13;
            _iterator = req.body.ventaPrenda[Symbol.iterator]();

          case 15:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 23;
              break;
            }

            i = _step.value;
            _context.next = 19;
            return _ventaPrendaModels["default"].create({
              idVenta: v.idVenta,
              idPrenda: i.idPrenda,
              detalle: i.detalle,
              cantidad: i.cantidad,
              precio: i.precio,
              estadoVenPre: true,
              fechaRegVenPre: new Date()
            }, {
              fields: ['idVenta', 'idPrenda', 'detalle', 'cantidad', 'precio', 'estadoVenPre', 'fechaRegVenPre']
            });

          case 19:
            newVenta = _context.sent;

          case 20:
            _iteratorNormalCompletion = true;
            _context.next = 15;
            break;

          case 23:
            _context.next = 29;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](13);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 29:
            _context.prev = 29;
            _context.prev = 30;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 32:
            _context.prev = 32;

            if (!_didIteratorError) {
              _context.next = 35;
              break;
            }

            throw _iteratorError;

          case 35:
            return _context.finish(32);

          case 36:
            return _context.finish(29);

          case 37:
            return _context.abrupt("return", res.json({
              message: "Server: Prendas agregadas a la venta correctamente",
              exito: true
            }));

          case 40:
            _context.prev = 40;
            _context.t1 = _context["catch"](9);
            return _context.abrupt("return", res.json({
              message: "Server: Error al agregar la prendas",
              error: _context.t1
            }));

          case 43:
            _context.next = 48;
            break;

          case 45:
            _context.prev = 45;
            _context.t2 = _context["catch"](4);
            res.json({
              message: 'Server: Error al crear la Venta',
              //enviando exito para detectar en el frontend que la venta fue exitosa o no fue exitosa
              exito: false
            });

          case 48:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 45], [9, 40], [13, 25, 29, 37], [30,, 32, 36]]);
  }));
  return _createNewVenta.apply(this, arguments);
}

; //Obteniendo las ventas que se realizo a un determinado cliente

function getVentasForClient(_x3, _x4) {
  return _getVentasForClient.apply(this, arguments);
}

function _getVentasForClient() {
  _getVentasForClient = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id, ven;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _ClienteModels["default"].findAll({
              where: {
                idCliente: id
              },
              include: {
                model: _VentaModels["default"],
                include: _ventaPrendaModels["default"]
              }
            });

          case 4:
            ven = _context2.sent;

            if (ven) {
              ven.reverse();
              res.json(ven);
            }

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.json({
              error: _context2.t0,
              message: 'Server: Error al Obtener los Detalles de la Venta'
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _getVentasForClient.apply(this, arguments);
}

;