import { NextApiResponse, NextApiRequest } from 'next';
import { questions } from '@/data';
import { Question } from '@/interfaces';

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse<Question[]>
) {
    return res.status(200).json(questions);
}