import { NextApiResponse, NextApiRequest } from 'next';
import { sentences } from '@/data';
import { Sentence } from '@/interfaces';

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse<Sentence[]>
) {
    return res.status(200).json(sentences);
}