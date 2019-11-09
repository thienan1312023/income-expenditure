import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MemoSchema = new Schema({
    title: { type: String, required: true, default: '' },
    content: { type: String, required: true, default: '' },
    date: { type: Date, required: true, default: Date.now() },
    color: { type: String },
    createBy: { type: String, required: true }
});


// Export the model
export default mongoose.model('Memo', MemoSchema);