import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

class CarsService {
  public async serviceCarRegistration(car: ICar) {
    const carODM = new CarsODM();
    const registeredCar = await carODM.registerVehicleODM(car);
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

  public async serviceGetAllCars() {
    const carODM = new CarsODM();
    const allCars = await carODM.getAllVehiclesODM();
    return allCars.map((car) => {
      const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = car;
      return { id, model, year, color, status, buyValue, doorsQty, seatsQty };
    });
  }

  public async serviceGetCarById(id: string) {
    const carODM = new CarsODM();
    const car = await carODM.getVehicleByIdODM(id);
    if (!car) return null;
    return {
      id: car._id,
      model: car.model,
      year: car.year,
      color: car.color,
      status: car.status,
      buyValue: car.buyValue,
      doorsQty: car.doorsQty,
      seatsQty: car.seatsQty,
    };
  }

  public async serviceUpdateCarById(id: string, update: ICar): Promise<any> {
    const carODM = new CarsODM();
    const updatedCar = await carODM.updateVehicleByIdODM(id, update);
    if (!updatedCar) return null;
    return {
      id: updatedCar._id,
      model: updatedCar.model,
      year: updatedCar.year,
      color: updatedCar.color,
      status: updatedCar.status,
      buyValue: updatedCar.buyValue,
      doorsQty: updatedCar.doorsQty,
      seatsQty: updatedCar.seatsQty,
    };
  }
}

export default CarsService;