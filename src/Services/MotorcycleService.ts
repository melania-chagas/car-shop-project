import Motorcyle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotoODM from '../Models/MotoODM';

class MotorcycleService {
  public async serviceMotorcycleRegistration(moto: IMotorcycle) {
    const motoODM = new MotoODM();
    const registeredMotocycle = await motoODM.registerVehicleODM(moto);
    return new Motorcyle({
      id: registeredMotocycle.id,
      model: registeredMotocycle.model,
      year: registeredMotocycle.year,
      color: registeredMotocycle.color,
      status: registeredMotocycle.status,
      buyValue: registeredMotocycle.buyValue,
      category: registeredMotocycle.category,
      engineCapacity: registeredMotocycle.engineCapacity,
    });
  }
}

export default MotorcycleService;