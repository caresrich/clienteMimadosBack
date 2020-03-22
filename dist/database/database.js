"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pruebaConnections = exports.db = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db = new _sequelize["default"]('DBMimados', 'root', '1234', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    connectTimeout: 1000
  } // mariadb connector option

});
exports.db = db;
var pruebaConnections = db.authenticate().then(function () {
  return console.log('conected');
})["catch"](function (err) {
  return console.log('not connected' + err);
});
exports.pruebaConnections = pruebaConnections;