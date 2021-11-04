import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        unique: true,
        require: true,
    },
    lastname: {
        type: String,
        unique: true,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        ref: 'Role'
    }
});

export const User = mongoose.model('User', userSchema);