import fs from 'fs';
import path from 'path';
import { Car } from '@types';

export const loadCarData = () => {
  const carDataPath = path.join(process.cwd(), 'data', 'cars.json');
  const carsJSON = fs.readFileSync(carDataPath);
  const carData = JSON.parse(carsJSON.toString());
  return carData;
};

export const getSingleCarData = (id: string) => {
  const carData: { cars: Car[] } = loadCarData();

  const selectedCar = carData.cars.find((car) => car.id.toString() === id);

  return selectedCar;
};
