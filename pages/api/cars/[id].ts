import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.query);
  res.status(200).json({ message: 'Ok' });
};

export default handler;
