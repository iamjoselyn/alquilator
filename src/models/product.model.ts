import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    description: String,
    status: Number,
    category: String,
    price: Number,
    pictures: String,
    bookingLength: Number,
    userId: [{ type: Schema.Types.ObjectId, ref: 'User' }]

});

module.exports = mongoose.model("Product", ProductSchema);