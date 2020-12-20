import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    description: String,
    status: String,
    category: String,
    price: Number,
    pictures1: String,
    pictures2: String,
    pictures3: String,
    bookingLength: Number,
    userId: { type: Schema.Types.ObjectId, ref: 'User' }

});

module.exports = mongoose.model("Product", ProductSchema);