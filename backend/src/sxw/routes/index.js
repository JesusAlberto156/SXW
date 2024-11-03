import { Router } from 'express';
import config from '../../config/config';

import usuariosRoutes from './usuarios.routes';

const routerAPI = (app) => {
  const router = Router();
  const api = config.API_URL;

  app.use(api, router);

  router.use('/usuarios/', usuariosRoutes);

  return router;
};

module.exports = routerAPI;