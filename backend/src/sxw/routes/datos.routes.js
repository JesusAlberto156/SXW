import { Router } from 'express';
import * as datosController from '../controllers/datos.controller';
const router = Router();

router.get('/', datosController.getDatosList);

router.get('/:id', datosController.getDatosItem);

router.post('/',datosController.postDatosItem);

router.put('/:id', datosController.putDatosItem);

router.delete('/:id', datosController.deleteDatosItem);

export default router;
