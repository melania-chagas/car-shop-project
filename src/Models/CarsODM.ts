import { Model, Schema, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

// ODMs (Object Document Mapping), que lidam com dados estruturados em bancos de dados não relacionais (como o MongoDB, DynamoDB, entre outros).

class CarsODM {
  private schema: Schema; // Atributo para o "molde"
  private model: Model<ICar>; // Atributo para criar coleção e fornecer acesso ao banco

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    // Antes de criar o Schema, verificar se o schema já existe. Caso não exista, o schema será criado.
    this.model = models.cars || model('cars', this.schema);
  }

  public async carRegistrationODM(car: ICar): Promise<ICar> {
    return this.model.create({
      ...car, 
    });
  }

  public async getAllCarsODM() {
    return this.model.find();
  }

  public async getCarByIdODM(id: string) {
    return this.model.findById(id);
  }
}

export default CarsODM;