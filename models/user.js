const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    userName: {type: String, required: true, index: true, unique: true},
    accountName:{type: String, required: false},
    profileImagePath:{type: String, required: false, default:""},
    address: {type: Object, required: false, default:{}},
    password: {type: String, required: false},
    phone: {type: String, required: false},
    email: {type: String, required: false},
    note: {type: String, required: false},
    createdBy: {type: String,  required: false},
    updatedBy: {type: String, required: false},
    createdAt:{type: Date, default: Date.now(),required: true},
    updatedAt: {type: Date, required: false}
});

module.exports = mongoose.model('user', userSchema);

