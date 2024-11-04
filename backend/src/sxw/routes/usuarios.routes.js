import { Router } from 'express';
import * as UsuariosController from '../controllers/usuarios.controller';
const router = Router();

//RUTAS GET
router.get('/verificar/',UsuariosController.getVerificarEmail);
//RUTAS GET
//RUTAS POST
router.post('/',UsuariosController.postUsuarioItems);
//RUTAS POST
export default router;
