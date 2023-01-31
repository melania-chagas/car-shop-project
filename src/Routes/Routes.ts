import { Router } from 'express';
import CarsController from '../Controllers/CarsController';
import MotorcycleController from '../Controllers/MotorcycleController';

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

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).controllerMotorcycleRegistration(),
);

routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).controllerGetAllMotorcycles(),
);

routes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).controllerGetMotoById(),
);

routes.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).controllerUpdateMotoById(),
);

export default routes;