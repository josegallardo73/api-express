import express from 'express';
import { Routes } from './router/routes.js'
import { connect } from './models/conexion.js';
import { productos } from './models/productos.js';
import  { mensajes } from './models/mensajes.js';

const app = express();
const PORT = 9000;

app.use(express.json());

const rutasProducts = new Routes(app, 'productos', productos);
const rutasMessages = new Routes(app, 'mensajes' , mensajes);

// Rutas productos
rutasProducts.getTest();
rutasProducts.get('/productos');
rutasProducts.getById('/productos/:id');
rutasProducts.post('/productos');
rutasProducts.updateProduct('/productos/:id');
rutasProducts.delete('/productos/:id');

rutasMessages.get('/mensajes')
rutasMessages.getById('/mensajes/:id');
rutasMessages.post('/mensajes');
rutasMessages.updateMessage('/mensajes/:id');
rutasMessages.delete('mensajes/:id');

app.listen(PORT, () => {
    connect();
    console.log(`Running server on port ${PORT}`)
}).on('error', (err) => {
    throw new Error(err);
} )




