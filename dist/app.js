"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _clienteRouters = _interopRequireDefault(require("./routers/clienteRouters"));

var _ventaRouters = _interopRequireDefault(require("./routers/ventaRouters"));

var _ventaPrendaRouters = _interopRequireDefault(require("./routers/ventaPrendaRouters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//una libreria para el funcionamiento de las peticiones
//importacion de rutas
//inicializacion de la app
var app = (0, _express["default"])(); //este middelwar (cors) aprueba las credenciales de cors (peticion cruzada) en firefox,
//esto se debe por la seguridad a la hora de realizar peticion de la api de un dominio diferente, en otros navegadores no es necesario

app.use((0, _cors["default"])({
  origin: true,
  credentials: true
})); //el * indica que tienen acceso todos los cloientes, esto no es bueno para la seguridad

/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });*/
//configuracion de middelwares

app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)()); //registro de rutas

app.use('/api/clientes', _clienteRouters["default"]);
app.use('/api/ventas', _ventaRouters["default"]);
app.use('/api/ventaPrendas', _ventaPrendaRouters["default"]);
var _default = app;
exports["default"] = _default;