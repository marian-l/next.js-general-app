import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const todoFromFrontend = JSON.parse(req.body);

    const savedTodo = await prisma.todoItem.create({
        data: todoFromFrontend
    })

    res.json(savedTodo)
}