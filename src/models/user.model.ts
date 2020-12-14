import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    _id: Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    city: String,
    province: String,
    zipCode: Number,
    poductId: [{ type: Schema.Types.ObjectId, ref: 'Product' }]

    // conditions: Boolean

});

module.exports = mongoose.model("User", UserSchema);


