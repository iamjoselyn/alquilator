import dotenv from "dotenv";
import mongoose from 'mongoose';
import express from "express";
import { productBookingRoutes } from "./routes/product-booking.routes";
import { userRoutes } from "./routes/user.routes";
import { productRoutes } from "./routes/product.routes"


dotenv.config();

// Instanciar express
const app = express();

// Puerto
app.set("port", process.env.PORT);

// Middlewares
app.use(express.json());

// Rutas
app.use("/users", userRoutes.router);
app.use("/products", productRoutes.router);
app.use("/productBooking", productBookingRoutes.router);


mongoose.connect(`mongodb+srv://belenmlt:${process.env.MATLASPASS}@cluster0.xq5kj.mongodb.net/Alquilator?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(() => {
    // Inicializar server
    app.listen(app.get("port"), () => {
        console.log(`Server working on port ${app.get("port")}`);    
    });
}).catch(e => console.log('Ha ocurrido un error:', e));

