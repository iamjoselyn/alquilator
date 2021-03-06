import dotenv from "dotenv";
dotenv.config();

import express from "express";

// Instanciar express
const app = express();

// Puerto
app.set("port", process.env.PORT);

// Inicializar server
app.listen(app.get("port"), () => {
    console.log(`Server working on port ${app.get("port")}`);    
});

// Middlewares
app.use(express.json());

// Rutas
// app.use("/authors", authorsRoutes.router);