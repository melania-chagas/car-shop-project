import {
  Model,
  models,
  Schema,
  model,
} from 'mongoose';

abstract class AbstractODM <T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(modelName: string, schema: Schema) {
    this.modelName = modelName;
    this.schema = schema;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async registerVehicleODM(data: T): Promise<T> {
    return this.model.create({
      ...data,
    });
  }

  public async getAllVehiclesODM() {
    return this.model.find();
  }

  public async getVehicleByIdODM(id: string) {
    return this.model.findById(id);
  }

  public async updateVehicleByIdODM(id: string, data: object) {
    // https://mongoosejs.com/docs/api.html#model_Model-findByIdAndUpdate
    // [options.new=false] «Booleano» se verdadeiro, retorna o documento modificado em vez do original.

    return this.model.findByIdAndUpdate(id, { ...data }, { new: true });
  }
}

export default AbstractODM;