import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const iconsDir = path.resolve('./public/feather-icons');
  const files = fs.readdirSync(iconsDir);
  const icons = files.map(file => path.basename(file, '.svg'));
  res.status(200).json({ icons });
}
