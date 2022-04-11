import path from 'path';
import fs from 'fs';

import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return;
  }

  try {
    const carDataPath = path.join(process.cwd(), 'data', 'cars.json');
    const carsJSON = fs.readFileSync(carDataPath);
    const carData = JSON.parse(carsJSON.toString());
    res.status(200).json({ message: 'Ok', data: carData });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export default handler;
