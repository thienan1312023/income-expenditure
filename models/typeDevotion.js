import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const typeDevotionSchema = new Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    createdBy: {type: String, required: false},
    updatedBy: {type: String, required: false},
    createdAt:{type: Date, default: Date.now(), required: true},
    updatedAt: {type: Date, required: false}
});

export default mongoose.model('TypeDevotion', typeDevotionSchema);

