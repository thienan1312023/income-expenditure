import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    createdBy: {type: String,  required: true},
    updatedBy: {type: String, required: false},
    createdAt:{type: Date, default: Date.now(), required: true},
    updatedAt: {type: Date, required: false},    
});

export default mongoose.model('Note', noteSchema);

