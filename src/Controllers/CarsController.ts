import { NextFunction, Request, Response } from 'express';
import statusCodes from '../Helpers/StatusCodes';
import ICar from '../Interfaces/ICar';
import CarsService from '../Services/CarsService';

class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsService();
  }

  public async controllerCarRegistration() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status ? this.req.body.status : false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const registeredCar = await this.service.serviceCarRegistration(car);
      return this.res.status(statusCodes.created).json(registeredCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async controllerGetAllCars() {
    try {
      const allCars = await this.service.serviceGetAllCars();
      return this.res.status(statusCodes.OK).json(allCars);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarsController;