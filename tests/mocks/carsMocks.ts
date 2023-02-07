import ICar from '../../src/Interfaces/ICar';

const bodyInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const registeredCar = {
  id: '63cf09ab23a28fc6c3805d92',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

const allCars = [
  {
    id: '63cf09ab23a28fc6c3805d92',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
];

const carId = '63cf09ab23a28fc6c3805d92';

const carOutputODM = {
  _id: '63cf09ab23a28fc6c3805d92',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
  __v: 0,
};

const dataToBeUpdated = {
  model: 'Marea',
  year: 2002,
  color: 'Blue',
  status: true,
  buyValue: 12.000,
  doorsQty: 2,
  seatsQty: 5,
};

const dataUpdated = {
  _id: '63e24f9fcf35c4e4271deff3',
  model: 'Marea',
  year: 2002,
  color: 'Blue',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

const dataUpdated2 = {
  id: '63e24f9fcf35c4e4271deff3',
  model: 'Marea',
  year: 2002,
  color: 'Blue',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

const invalidMongoId = '63cfd37e';

const errorMessage = {
  message: 'Invalid mongo id',
};

export {
  bodyInput,
  registeredCar,
  allCars,
  carId,
  carOutputODM,
  dataToBeUpdated,
  invalidMongoId,
  errorMessage,
  dataUpdated,
  dataUpdated2,
};