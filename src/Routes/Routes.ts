import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarsController(req, res, next).controllerCarRegistration(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new CarsController(req, res, next).controllerGetCarById(),
);

routes.put(
  '/cars/:id',
  (req, res, next) => new CarsController(req, res, next).controllerUpdateCarById(),
);

routes.get(
  '/cars',
  (req, res, next) => new CarsController(req, res, next).controllerGetAllCars(),
);

export default routes;