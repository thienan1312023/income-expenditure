import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');
const devotionSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'user', required: true},
    description: {type: String, required: true},
    amountMoney: {type: String, required: true},
    createdBy: {type: String,  required: true},
    updatedBy: {type: String, default: Date.now(), required: false},
    createdAt:{type: Date, default: Date.now(),required: true},
    updatedAt: {type: Date, required: false},    
});
devotionSchema.plugin(mongoosePaginate);
export default mongoose.model('Devotion', devotionSchema);