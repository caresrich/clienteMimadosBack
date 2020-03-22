import {Router} from 'express';
const router = Router();

import {createVenta,getSaldosByClient,getAllVentas,getUltimaVenta,updateMontoCancel,updateStateVenta,addMonto,getIdCliente} from '../controllers/ventaControllers'

router.get('/',getAllVentas);

router.get('/:id',getSaldosByClient);
//creating a new venta
router.post('/',createVenta);
//obtener la ultima venta
router.get('/vender/:id',getUltimaVenta);
//actulizar el monto cancelado a una venta
router.put('/actualizarMontoVenta/:id',updateMontoCancel);
//updating  the state of venta
router.put('/actualizarEstadoVenta/:id',updateStateVenta);
//add the montoCancelado of venta
router.put('/addMonto/:id',addMonto);
//get id client desde la venta
router.get('/obtenerIdCliente/:id',getIdCliente);


export default router;