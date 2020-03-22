import {Router} from 'express';
const router=Router();

import {createNewVenta,getVentasForClient} from '../controllers/ventaPrendaControllers';

router.post('/:id',createNewVenta);
router.get('/:id',getVentasForClient);



export default router;