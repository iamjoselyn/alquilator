import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductBookingSchema = new Schema({

    name: String,
    email: String,
    phone: Number,
    message: String,
    productName: String
    
});

module.exports = mongoose.model("ProductBooking", ProductBookingSchema);