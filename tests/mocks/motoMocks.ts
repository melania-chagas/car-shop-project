const model = 'Honda Cb 600f Hornet';

const registeredMotorcycle = {
  id: '63e245b41a179e50833d7781',
  model,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
};

const bodyInputMoto = {
  model,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const allMotorcycles = [{
  id: '63e245b41a179e50833d7781',
  model,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
}];

const motoOutputODM = {
  _id: '63e245b41a179e50833d7781',
  model,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
  __v: 0,
};

const dataUpdatedMoto = {
  _id: '63e245b41a179e50833d7781',
  model,
  year: 2002,
  color: 'Blue',
  status: true,
  buyValue: 40,
  category: 'Street',
  engineCapacity: 600,
};

const dataUpdated2Moto = {
  id: '63e245b41a179e50833d7781',
  model,
  year: 2002,
  color: 'Blue',
  status: true,
  buyValue: 40,
  category: 'Street',
  engineCapacity: 600,
};

const motoId = '63e245b41a179e50833d7781';

export {
  registeredMotorcycle,
  bodyInputMoto,
  allMotorcycles,
  motoOutputODM,
  dataUpdatedMoto,
  dataUpdated2Moto,
  motoId,
};