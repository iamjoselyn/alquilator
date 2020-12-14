import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductBookingSchema = new Schema({

    name: String,
    email: String,
    phone: Number,
    message: String,
    productName: String
    // idProduct:
    // idUser:
    
});

module.exports = mongoose.model("ProductBooking", ProductBookingSchema);