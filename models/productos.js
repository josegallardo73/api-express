import  mongoose from 'mongoose';

export const productos = new mongoose.Schema({
    title: {type: String, require: true, max: 100},
    price: {type: Number, require: true},
    thumbnail: {type: String, require: true, max: 100},
});


