import dotenv from "dotenv";
import mongoose from 'mongoose';
<<<<<<< HEAD
=======

>>>>>>> users
dotenv.config();

import { userRoutes } from './routes/user.routes';
import express from "express";
import { productBookingRoutes } from "./routes/product-booking.routes";
import { userRoutes } from "./routes/user.routes";

// Instanciar express
const app = express();

// Puerto
app.set("port", process.env.PORT);

<<<<<<< HEAD
=======
// // Inicializar server
// app.listen(app.get("port"), () => {
//     console.log(`Server working on port ${app.get("port")}`);    
// });
>>>>>>> users

// Middlewares
app.use(express.json());


// Rutas
<<<<<<< HEAD
app.use("/productBooking", productBookingRoutes.router);
app.use("/users", userRoutes.router);



mongoose.connect(`mongodb+srv://belenmlt:${process.env.MATLASPASS}@cluster0.xq5kj.mongodb.net/Alquilator?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
=======
app.use("/users", userRoutes.router);

mongoose.connect(`mongodb+srv://belenmlt:${process.env.MATLASPASS}@cluster0.xq5kj.mongodb.net/Alquilator?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
>>>>>>> users
.then(() => {
    // Inicializar server
    app.listen(app.get("port"), () => {
        console.log(`Server working on port ${app.get("port")}`);    
    });
})
<<<<<<< HEAD
.catch(e => console.log('Ha ocurrido un error:', e));
=======
.catch(e => console.log('Ha ocurrido un error:', e));
>>>>>>> users
