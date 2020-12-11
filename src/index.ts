import dotenv from "dotenv";
import mongoose from 'mongoose';

dotenv.config();

import { userRoutes } from './routes/user.routes';
import express from "express";

// Instanciar express
const app = express();

// Puerto
app.set("port", process.env.PORT);

// // Inicializar server
// app.listen(app.get("port"), () => {
//     console.log(`Server working on port ${app.get("port")}`);    
// });

// Middlewares
app.use(express.json());

// Rutas
app.use("/users", userRoutes.router);

mongoose.connect(`mongodb+srv://belenmlt:${process.env.MATLASPASS}@cluster0.xq5kj.mongodb.net/Alquilator?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    // Inicializar server
    app.listen(app.get("port"), () => {
        console.log(`Server working on port ${app.get("port")}`);    
    });
})
.catch(e => console.log('Ha ocurrido un error:', e));
