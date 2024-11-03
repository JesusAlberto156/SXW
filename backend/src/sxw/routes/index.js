import { Router } from 'express';
import config from '../../config/config';

import datosRoutes from './datos.routes';

const routerAPI = (app) => {
  const router = Router();
  const api = config.API_URL;

  app.use(api, router);

  router.use('/Estudiantes/', datosRoutes);

  return router;
};
module.exports = routerAPI;