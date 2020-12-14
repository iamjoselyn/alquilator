import { Request, Response } from 'express';
import mongoose from "mongoose";



const ProductModel = require("../models/product.model")

class ProductController {
    public async getProducts (req: Request, res: Response){
        try {
            const allProducts = await ProductModel.find()
                .populate("userId");
            res.json(allProducts);

        } catch (error) {
            console.log(error);
            res.sendStatus(404);
        }
    }

    public async postProducts (req: Request, res: Response){

        try {
            const product = {
                name: req.body.name,
                description: req.body.description,
                status: req.body.status,
                category: req.body.category,
                price: req.body.price,
                pictures: req.body.pictures,
                bookingLength: req.body.bookingLength,
                userId: req.body.userId
                // userId: ¿cómo hago referencia al id del usuario?
            };

            const newProduct = new ProductModel();

            // newProduct._id = new mongoose.Types.ObjectId();
            newProduct.name = product.name;
            newProduct.description = product.description;
            newProduct.status = product.status;
            newProduct.category = product.category;
            newProduct.price = product.price;
            newProduct.pictures = product.pictures;
            newProduct.bookingLength = product.bookingLength;
            newProduct.userId = product.userId
            

            await newProduct.save();

            res.send("Los datos de tu producto se han guardado correctamente.")

        } catch(error){
            console.log(error);
            res.sendStatus(404)
        }
    }

    public async postPics (req: Request, res: Response) {
    
        try {
            res.json(req.files);

        } catch (error) {
            res.sendStatus(400);
        }

        
    }

    public async deleteProducts (req: Request, res: Response){

    }

    public async updateProucts(req: Request, res: Response){
        
    }

}

export const productController = new ProductController();