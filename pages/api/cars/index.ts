import { NextApiRequest, NextApiResponse } from 'next';
import { loadCarData } from '@lib';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return;
  }

  try {
    const carData = loadCarData();
    res.status(200).json({ message: 'Ok', data: carData });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export default handler;
