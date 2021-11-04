import { Request, Response } from 'express';
import { Todo } from '../models/todos';
import crypto from 'crypto';


export const getAllTodos = async (req: Request, res: Response) => {
    const limit: number = Number(req.query._limit);
    try {
        const todos = await Todo.find({}).limit(limit || 100);
        res.status(200).json(todos);
    } catch (error) {
        console.log(error)
    }
}

export const removeTodo = async (req: Request, res: Response) => {
    try {
        console.log(req.params.id)
        await Todo.findOneAndRemove({ id: req.params.id })
        res.status(200).json({ status: 'success' })
    } catch (error) {
        console.log(error)
    }
}

export const checkedTodo = async (req: Request, res: Response) => {
    try {
        await Todo.findOneAndUpdate({ id: req.body.id },
            {
                completed: !req.body.completed,
            }, null)
        res.status(200).end()


    } catch (error) {
        console.log(error)
    }
}

export const getTodoById = async (req: Request, res: Response) => {
    try {
        const todo = await Todo.findOne({ id: req.params.id })
        res.status(200).json(todo);
    } catch (error) {

    }
}

export const createTodo = async (req: Request, res: Response) => {
    try {
        console.log(req.body.id)
        await new Todo({
            userId: req.body.id,
            id: crypto.randomBytes(12).toString('hex'),
            title: req.body.title,
            completed: req.body.completed
        }).save();

        res.status(200).end();
    } catch (error) {
        console.log(error);
    }
}
