import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true,
    },
    id: {
        type: String,
        unique: true,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    completed: {
        type: Boolean,
        require: true,
    },
});

export const Todo = mongoose.model('Todos', todoSchema);