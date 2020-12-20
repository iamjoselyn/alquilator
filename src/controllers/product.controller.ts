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
                pictures1: req.body.pictures1,
                pictures2: req.body.pictures2,
                pictures3: req.body.pictures3,
                bookingLength: req.body.bookingLength,
                userId: req.body.userId
            };

            const newProduct = new ProductModel();

            newProduct._id = new mongoose.Types.ObjectId();
            newProduct.name = product.name;
            newProduct.description = product.description;
            newProduct.status = product.status;
            newProduct.category = product.category;
            newProduct.price = product.price;
            newProduct.pictures1 = product.pictures1;
            newProduct.pictures2 = product.pictures2;
            newProduct.pictures3 = product.pictures3;
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
        try {
            const toDelete = req.params.id;

            const response = await ProductModel.deleteOne({_id: toDelete});

            res.send("El producto ha sido borrado");
        } catch (error) {
            console.log(error);
            res.sendStatus(404);
            
        }

    }

    public async updateProucts(req: Request, res: Response){
        try {
            const modifyProduct = await ProductModel.findByIdAndUpdate({
                _id: req.params.id
            },
            {
                name: req.body.name,
                description: req.body.description,
                status: req.body.status,
                category: req.body.category,
                price: req.body.price,
                bookingLength: req.body.bookingLength,
                
            });

            res.send("El producto se ha modificado correctamente.");
                          
        } catch(error) {
            console.log(error);
            res.sendStatus(404);
        }
    }

    public async getProductsByCategory(req: Request, res: Response) {
        try {
            const productsByCategory =  await ProductModel.find({
                category: req.params.category
            });
            res.send(productsByCategory)

        } catch (error) {
            console.log(error); 
            res.sendStatus(404);
        }
    }

    public async getById (req:Request, res:Response) {
        try {
            const productById = await ProductModel.find(
                {
                    _id: req.params.id
                }
            )
            res.json(productById)

        } catch (error) {
            console.log(error);
            res.sendStatus(400)
        }
    }

    public async getUserById (req:Request, res:Response) {
        try {
            const userProducts = await ProductModel.find(
                {
                    userId: req.params.id
                }
            )
            .populate('userId')
            res.json(userProducts)

        } catch (error) {
            console.log(error);
            res.sendStatus(400)
        }
    }
}

export const productController = new ProductController();