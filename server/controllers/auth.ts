import express from 'express';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';
import { createHmac } from 'crypto';

interface IRegistration {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string;
}

export const encryptPass = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction) => {

    try {
        req.body.password = await createHmac('sha256', req.body.password)
            .update('pass').digest('hex');
        next();
    } catch (error) {
        console.log(error)
    }
}

export const registration = async (req: express.Request, res: express.Response) => {
    try {
        const { firstname, lastname, email, password }: IRegistration = req.body;
        await new User({
            firstname, lastname, email, password, role: 'user',
        }).save();

        res.status(200).json('success');
    } catch (error) {
        console.log(error)
    }
}

export const verify = async (
    req: any, // Нужно дополнить request
    res: express.Response,
    next: express.NextFunction) => {

    try {
        const authHeader: string | undefined = req.headers['authorization'];
        const token: string = String(authHeader) && String(authHeader).split(' ')[1]
        if (token === null) return res.status(401); // Токена нет

        jwt.verify(token, 'secret', (err, user) => {
            if (err) return res.send(403); // Я вижу токен но токен не валидный
            req.user = user;
        })
        next();
    } catch (error) {
        console.log(error)
    }
}

export const access = async (req: any, res: express.Response) => {
    try {
        console.log('access')
        console.log(req.user)
        res.status(200).json(req.user)
    } catch (error) {
        console.log(error)
    }
}


interface ILogin {
    email: string;
    password: string;
}

interface IUser {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string;
}

export const login = async (
    req: express.Request,
    res: express.Response) => {
    try {
        const { email, password }: ILogin = req.body;

        const user: IUser[] = await User.find({ email: email });

        if (!user) return res.status(200).json({ message: 'Email incorrect' });
        if (password !== user[0].password) return res.status(200).json({ message: 'Password incorrect' });
        
        const token: string = jwt.sign({
            id: user[0].id,
            firstname: user[0].firstname,
            lastname: user[0].lastname,
            email: user[0].email,
            role: user[0].role,
        }, 'secret');
        console.log(token)
        res.status(200).json({ token: token });
        
    } catch (error) {
        console.log(error)
    }
}