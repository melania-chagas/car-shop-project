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

  public async serviceGetAllMotorcycles() {
    const motoODM = new MotoODM();
    const allMotorcycles = await motoODM.getAllVehiclesODM();
    return allMotorcycles.map((moto) => {
      const { id, model, year, color, status, buyValue, category, engineCapacity } = moto;
      return { id, model, year, color, status, buyValue, category, engineCapacity };
    });
  }

  public async serviceGetMotoById(id: string) {
    const motoODM = new MotoODM();
    const moto = await motoODM.getVehicleByIdODM(id);
    if (!moto) return null;
    return {
      id: moto._id,
      model: moto.model,
      year: moto.year,
      color: moto.color,
      status: moto.status,
      buyValue: moto.buyValue,
      category: moto.category,
      engineCapacity: moto.engineCapacity,
    };
  }
}

export default MotorcycleService;