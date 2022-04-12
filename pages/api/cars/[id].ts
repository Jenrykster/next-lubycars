import path from 'path';
import fs from 'fs';

import { NextApiRequest, NextApiResponse } from 'next';
import { Car } from 'shared/types';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return;
  }

  try {
    const carDataPath = path.join(process.cwd(), 'data', 'cars.json');
    const carsJSON = fs.readFileSync(carDataPath);
    const carData: { cars: Car[] } = JSON.parse(carsJSON.toString());
    console.log(carData);
    const selectedCar = carData.cars.find(
      (car) => car.id.toString() === req.query.id
    );
    res.status(200).json({ message: 'Ok', selectedCar });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export default handler;
