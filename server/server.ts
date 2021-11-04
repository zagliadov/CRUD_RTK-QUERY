import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import auth from './routes/auth';
import todos from './routes/todos';
dotenv.config();
const app = express();
const PORT: string = process.env.SPORT || String(9002);
app.use(express.json());
app.use(cors());


app.use('/api/auth', auth);
app.use('/api/todos', todos);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server start on port: ${PORT}`)
    })
})
