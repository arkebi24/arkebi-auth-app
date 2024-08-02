const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    country: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String,
        required: true,
        unique: true,
    }
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;