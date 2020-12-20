import { Request, Response } from "express";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import data from '../config/config.json';

const UserModel = require("../models/user.model");

// mongoose.connect('mongodb+srv://belenmlt:%AG0qUfcY@DL@cluster0.xq5kj.mongodb.net/Alquilator?retryWrites=true&w=majority', 
//                 { useNewUrlParser: true, useUnifiedTopology: true }
//                 );


class UserController {
    public async getUsers(req: Request, res: Response) {
        try {
            const allUsers = await UserModel.find()
            res.send(allUsers);

        } catch (error) {
            console.log(error);
            res.sendStatus(404);
        }
    };

    public async getUserProducts (req: Request, res: Response) {
        try {
             
            // que recoja todos los productos publicados por (where) userId sea el que venga por param 

        } catch (error) {
            console.log(error);
            res.sendStatus(404);
        }
    };

    public async postUsers(req: Request, res: Response) {
        try {
            const user = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                city: req.body.city,
                province: req.body.province,
                zipCode: req.body.zipCode,
            };

            const newUser = new UserModel();
            
            newUser._id = new mongoose.Types.ObjectId();
            newUser.firstName = user.firstName;
            newUser.lastName = user.lastName;
            newUser.email = user.email;
            newUser.password = user.password;
            newUser.city = user.city;
            newUser.province = user.province;
            newUser.zipCode = user.zipCode;

            await newUser.save();

            res.send("Tus datos de usuario se han guardado correctamente.")

        } catch (error) {
            console.log(error);
            res.sendStatus(400);
        }
    };

    public async deleteUsers(req: Request, res: Response) {
        try {
            const deleteUser = req.body.email;
            const response = await UserModel.deleteOne({email: deleteUser});

            res.send("El usuario se ha borrado correctamente.")

        } catch (error) {
            console.log(error);
            res.sendStatus(404);
        }
    };

    public async updateUsers(req: Request, res: Response) {
        try {
            // const modifyUser = req.body;
            // const response = await UserRegistration.updateOne({email: modifyUser}, {})
            //                 // {busca el usuario con email x}, {¿qué le mandamos que modifique?}

            const update = await UserModel.findByIdAndUpdate({
                _id: req.body.id
            },
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                city: req.body.city,
                province: req.body.province,
                zipCode: req.body.zipCode
                
            });

            res.send("El usuario se ha modificado correctamente.");

        } catch (error) {
            console.log(error);
            res.sendStatus(404);
        }
    };

    // // No se estaba usando hasta intentar coger productos de cada usuario

    public async getUserByEmail(req: Request, res: Response) {
        try {
            const usersByEmail = await UserModel.findOne({
                email: req.params.email
            })
            res.json(usersByEmail);

        } catch (error) {
            console.log(error);
            res.sendStatus(404);
        }
    };

    //User authentication
    public async authUser (req: Request, res: Response) {
        console.log('Llegamos al controller de la ruta');
        console.log(req.body);
        try {
            const result: Object | null = await UserModel.findOne(
                {
                   email: req.body.email,
                   password: req.body.pass
                },
            );
            console.log(result);
                if ( result === null ) {
                    // res.sendStatus(401)
                //    throw new Error('Something bad happened');
                res.status(500).json('oops error');
                }
    
                const token = jwt.sign(
                    {result}, //se puede meter tambien el password
                    data.jsonSecret,
                    {expiresIn: '15m'} 
                );
                res.json(token);

        }catch(error) {
            res.sendStatus(401)
        }
    }
}

export const userController = new UserController();