import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import { 
  allMotorcycles,
  bodyInputMoto,
  dataUpdated2Moto,
  dataUpdatedMoto,
  motoId,
  motoOutputODM,
  registeredMotorcycle,
} from '../../mocks/motoMocks';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Teste acerca da rota /motorcycles', function () {
  it('Verifica se é possível cadastrar uma nova moto no banco de dados', async function () {
    sinon.stub(Model, 'create').resolves(registeredMotorcycle);

    const service = new MotorcycleService();
    const result = await service.serviceMotorcycleRegistration(bodyInputMoto);

    expect(result).to.be.deep.equal(registeredMotorcycle);
  });
 
  it(`Verifica se é possível fazer uma requisição que lista todas as motos
  cadastradas `, async function () {
    sinon.stub(Model, 'find').resolves(allMotorcycles);

    const service = new MotorcycleService();
    const result = await service.serviceGetAllMotorcycles();

    expect(result).to.be.deep.equal(allMotorcycles);
  });

  it(`Verifica se é possível fazer uma busca por uma moto específica,
  pelo seu id`, async function () {
    sinon.stub(Model, 'findById').resolves(motoOutputODM);

    const service = new MotorcycleService();
    const result = await service.serviceGetMotoById(registeredMotorcycle.id);

    expect(result).to.be.deep.equal(registeredMotorcycle);
  });

  it('Verifica se é possível atualizar os dados de uma moto com base em seu id', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(dataUpdatedMoto);

    const service = new MotorcycleService();
    const result = await service.serviceUpdateMotoById(motoId, dataUpdatedMoto);

    expect(result).to.be.deep.equal(dataUpdated2Moto);
  });

  afterEach(function () {
    sinon.restore();
  });
});