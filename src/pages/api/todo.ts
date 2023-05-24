import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
        const data = JSON.parse(req.body);
        
        switch (req.method) {
            case 'CREATE':
                let savedTodo
                try {
                    savedTodo = await prisma.todoItem.create({
                        data: data
                    })
                    
                    res.json(savedTodo)
                } catch (e) {
                    return e;
                }
                return savedTodo;
            case 'DELETE':
                try {

                    const deletedTodo = await prisma.todoItem.delete({
                        where: {
                            id: data.id
                        }
                    })
                    res.json(deletedTodo)
                    return deletedTodo;
                } catch (e) {
                    return e;
                }
            case 'UPDATE':
                if (data == typeof Array) {
                    const id: string = data[0];
                    const finished: boolean = data[1];
                    
                    try {
                        const updatedTodo = await prisma.todoItem.update({
                            where: {
                                id: id,
                            },
                            data: {
                                done: finished
                            }
                        })
                        return updatedTodo
                    } catch (e) {
                        return e;
                    } 
                
                } else {
                    try {
                        const updatedTodo = await prisma.todoItem.update({
                            where: {
                                id: data.id,
                            },
                            data: {
                                item: data.name,
                                date: data.date,
                                due: data.due,
                                done: data.done
                            }
                        })
                        return updatedTodo
                    } catch (e) {
                        return e;
                    }
                }
            case 'READ':
                const readTodos = await prisma.todoItem.findMany({
                    // where: {
                    //     id: data.id
                    // },
                })

                res.json(readTodos);
                return readTodos;
            default:
                break;
            
    }
}