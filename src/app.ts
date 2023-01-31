import express from 'express';
import carRoute from './Routes/CarRoutes';
import motorcycleRoute from './Routes/MotorcyclesRoutes';

const app = express();
app.use(express.json());
app.use(carRoute);
app.use(motorcycleRoute);

export default app;
