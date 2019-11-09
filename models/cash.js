import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cashSchema = new Schema({
    adjustableAmount: {type: Number, required: true},
    currentCashMoney: {type: Number, required: true},
    createdBy: {type: String,  required: true},
    updatedBy: {type: String, required: false},
    createdAt:{type: Date, default: Date.now(),required: true},
    updatedAt: {type: Date, required: false},    
});

export default mongoose.model('Cash', cashSchema);

