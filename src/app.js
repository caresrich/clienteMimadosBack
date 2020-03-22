import express,{json} from 'express';
import morgan from 'morgan';

//una libreria para el funcionamiento de las peticiones
import cors from 'cors';
//importacion de rutas
import rutasClientes from './routers/clienteRouters';
import rutasVentas from './routers/ventaRouters';
import rutasVentaPrendas from './routers/ventaPrendaRouters'


//inicializacion de la app
const app=express();
//este middelwar (cors) aprueba las credenciales de cors (peticion cruzada) en firefox,
//esto se debe por la seguridad a la hora de realizar peticion de la api de un dominio diferente, en otros navegadores no es necesario

app.use( cors({ origin: true, credentials: true  }) );
//el * indica que tienen acceso todos los cloientes, esto no es bueno para la seguridad
/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });*/

//configuracion de middelwares
app.use(morgan('dev'));
app.use(json());




//registro de rutas
app.use('/api/clientes',rutasClientes);
app.use('/api/ventas',rutasVentas);
app.use('/api/ventaPrendas',rutasVentaPrendas);


export default app;