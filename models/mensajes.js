import  mongoose from 'mongoose';

export const mensajes = new mongoose.Schema({
    email: {type: String, require: true, max: 100},
    message: {type: String, require: true, max: 100},
});
