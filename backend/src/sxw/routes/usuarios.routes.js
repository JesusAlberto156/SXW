import { Router } from 'express';
import * as UsuariosController from '../controllers/usuarios.controller';
const router = Router();

router.post('/',UsuariosController.postUsuarioItems);

export default router;
