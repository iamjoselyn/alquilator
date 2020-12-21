import { Request, Response } from "express";

const ProductBooking = require("../models/product-booking.model");
class ProductBookingController {
    public async getBookings(req: Request, res: Response){
        try {
            const allMessages = await ProductBooking.find();
            res.send(allMessages);

        } catch(error) {
            console.log(error);
            res.sendStatus(404);
        }
    };

    public async postBookings(req: Request, res: Response){
        try {

            const message = {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                message: req.body.message,
                productName: req.body.productName
            };
            
            const newMessage = new ProductBooking();

            newMessage.name = message.name;
            newMessage.email = message.email;
            newMessage.phone = message.phone;
            newMessage.message = message.message;
            newMessage.productName = message.productName;

            await newMessage.save();

            res.send(newMessage);

        } catch(error) {
            console.log(error);
            res.sendStatus(404);
        }
        
    };

    public async deleteBookings(req: Request, res: Response){
        try {
            const deleteMessage = req.params.id;
            const response = await ProductBooking.deleteOne({_id: deleteMessage});

            res.send("El mensaje se ha borrado correctamente.");

        } catch(error) {
            console.log(error);
            res.sendStatus(400);
        }
    };

    public async updateBookings(req: Request, res: Response){
        try {
            const modifyMessage = req.body;
            const response = await ProductBooking.updateOne({_id: modifyMessage._id}, {message: modifyMessage.message});

            res.send(`El mensaje enviado al propietario ha sido modificado.`);

        } catch(error) {
            console.log(error);
            res.sendStatus(404);
        }
    };
}

export const productBookingController = new ProductBookingController();