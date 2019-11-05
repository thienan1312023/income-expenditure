const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const disbursementSchema = new Schema({
    amountMoney: {type: Number, required: true},
    description: {type: String, required: true},
    createdBy: {type: String,  required: true},
    updatedBy: {type: String, required: false},
    createdAt:{type: Date, default: Date.now(),required: true},
    updatedAt: {type: Date, required: false},    
});

module.exports = mongoose.model('disbursement', disbursementSchema);

