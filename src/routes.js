import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';

import RecipientsController from './app/controllers/RecipientsController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/recipients', RecipientsController.store);

export default routes;
