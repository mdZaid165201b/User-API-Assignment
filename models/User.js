const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model("user", UserSchema);