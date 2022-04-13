import { NextApiRequest, NextApiResponse } from 'next';
import { getSingleCarData } from 'shared/lib';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return;
  }

  try {
    const selectedCar = getSingleCarData(req.query.id[0]);
    res.status(200).json({ message: 'Ok', selectedCar });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export default handler;
