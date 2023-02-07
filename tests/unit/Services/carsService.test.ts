import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarsService from '../../../src/Services/CarsService';
import {
  allCars,
  bodyInput,
  carId,
  carOutputODM,
  dataToBeUpdated,
  dataUpdated,
  dataUpdated2,
  registeredCar,
} from '../../mocks/carsMocks';

describe('Teste acerca da rota /cars', function () {
  it('Verifica se é possível cadastrar um novo carro no banco de dados', async function () {
    sinon.stub(Model, 'create').resolves(registeredCar);

    const service = new CarsService();
    const result = await service.serviceCarRegistration(bodyInput);

    expect(result).to.be.deep.equal(registeredCar);
  });
 
  it(`Verifica se é possível fazer uma requisição que lista todos os carros
  cadastrados `, async function () {
    sinon.stub(Model, 'find').resolves(allCars);

    const service = new CarsService();
    const result = await service.serviceGetAllCars();

    expect(result).to.be.deep.equal(allCars);
  });

  it(`Verifica se é possível fazer uma busca por um carro específico,
  pelo seu id`, async function () {
    sinon.stub(Model, 'findById').resolves(carOutputODM);

    const service = new CarsService();
    const result = await service.serviceGetCarById(carId);

    expect(result).to.be.deep.equal(registeredCar);
  });

  it('Verifica se é possível atualizar os dados de um carro com base em seu id', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(dataUpdated);

    const service = new CarsService();
    const result = await service.serviceUpdateCarById(carId, dataToBeUpdated);

    expect(result).to.be.deep.equal(dataUpdated2);
  });

  afterEach(function () {
    sinon.restore();
  });
});