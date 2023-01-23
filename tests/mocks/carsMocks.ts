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

export {
  bodyInput,
  registeredCar,
  allCars,
  carId,
  carOutputODM,
};