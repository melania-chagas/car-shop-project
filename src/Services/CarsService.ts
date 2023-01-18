import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

class CarsService {
  public async carRegistrationService(car: ICar) {
    const carODM = new CarsODM();
    const registeredCar = await carODM.carRegistrationODM(car);
    return new Car({
      id: registeredCar.id,
      model: registeredCar.model,
      year: registeredCar.year,
      color: registeredCar.color,
      status: registeredCar.status,
      buyValue: registeredCar.buyValue,
      doorsQty: registeredCar.doorsQty,
      seatsQty: registeredCar.seatsQty,
    });
  }
}

export default CarsService;