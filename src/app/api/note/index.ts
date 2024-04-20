import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface Note {
    id: number;
    name: string;
    content: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const notes = await prisma.tWA_final.findMany();
            res.status(200).json(notes);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch notes' });
        }
    } else if (req.method === 'POST') {
        const { name } = req.body;
        try {
            const newNote = await prisma.tWA_final.create({
                data: { name }
            });
            res.status(201).json(newNote);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create note' });
        }
    } else if (req.method === 'PUT') {
        const { id, content } = req.body;
        try {
            const updatedNote = await prisma.tWA_final.update({
                where: { id: Number(id) },
                data: { content }
            });
            res.status(200).json(updatedNote);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update note' });
        }
    } else if (req.method === 'DELETE') {
        const { id } = req.body;

        try {
            await prisma.tWA_final.delete({
                where: { id: Number(id) },
            });
            res.status(200).json({ message: 'Note deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete note' });
        }
    } else {
        res.setHeader('Allow', ['POST', 'PUT', 'DELETE', 'GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default handler;