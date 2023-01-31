import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const carRoute = Router();

carRoute.post(
  '/cars',
  (req, res, next) => new CarsController(req, res, next).controllerCarRegistration(),
);

carRoute.get(
  '/cars/:id',
  (req, res, next) => new CarsController(req, res, next).controllerGetCarById(),
);

carRoute.put(
  '/cars/:id',
  (req, res, next) => new CarsController(req, res, next).controllerUpdateCarById(),
);

carRoute.get(
  '/cars',
  (req, res, next) => new CarsController(req, res, next).controllerGetAllCars(),
);

export default carRoute;