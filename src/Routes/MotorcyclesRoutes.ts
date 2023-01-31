import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRoute = Router();

motorcycleRoute.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).controllerMotorcycleRegistration(),
);

motorcycleRoute.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).controllerGetAllMotorcycles(),
);

motorcycleRoute.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).controllerGetMotoById(),
);

motorcycleRoute.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).controllerUpdateMotoById(),
);

export default motorcycleRoute;