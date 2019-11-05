const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bankSavingSchema = new Schema({
    adjustableAmount: {type: Number, required: true},
    currentBankMoney: {type: Number, required: true},
    createdBy: {type: String,  required: true},
    updatedBy: {type: String, required: false},
    createdAt:{type: Date, default: Date.now(),required: true},
    updatedAt: {type: Date, required: false},    
});

module.exports = mongoose.model('bankSaving', bankSavingSchema);

