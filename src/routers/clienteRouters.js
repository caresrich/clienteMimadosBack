import {Router} from 'express';
const router = Router();

import {createClient,getAllClient,getOneCliente,deleteClient,updateCliente,searchClient} from '../controllers/clienteControllers';

//obtenet todos los clinetes
router.get('/',getAllClient);
//crear un nuevo cliente
//router.post('/',createClient);
//obtener un solo cliente
router.get('/:id',getOneCliente);
//delete cliente
router.delete('/:id',deleteClient);
//update cliente
router.put('/:id',updateCliente);
//searching a client
router.post('/buscar',searchClient);
//createClienteExample
router.post('/',createClient);

export default router;