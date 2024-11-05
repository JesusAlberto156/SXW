import { Router } from 'express';
import * as UsuariosController from '../controllers/usuarios.controller';
import usuarios from '../models/usuarios';
const router = Router();

//RUTAS GET
router.get('/existe/cuenta/',UsuariosController.getInicioSesion);
router.get('/verificar/cuenta/',UsuariosController.getVerificarCuenta);
router.get('/verificar/correo/',UsuariosController.getVerificarEmail);
//RUTAS GET
//RUTAS POST
router.post('/',UsuariosController.postUsuarioItems);
router.post('/:email',UsuariosController.postCuenta);
//RUTAS POST
export default router;
