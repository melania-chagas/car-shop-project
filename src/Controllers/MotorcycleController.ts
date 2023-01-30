import { NextFunction, Request, Response } from 'express';
import statusCodes from '../Helpers/StatusCodes';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async controllerMotorcycleRegistration() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status ? this.req.body.status : false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const registeredMotorcycle = await this.service.serviceMotorcycleRegistration(motorcycle);
      return this.res.status(statusCodes.created).json(registeredMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }
}