import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    firstName: String,
    lastName: String,
    email: String,
    password: String,
    city: String,
    province: String,
    zipCode: Number,

    // conditions: Boolean

});

module.exports = mongoose.model("User", UserSchema);


