import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    accountName: { type: String, required: false, default:"" },
    profileImagePath: { type: String, required: false, default: "" },
    address: { type: Object, required: false, default: {} },
    password: { type: String, required: false },
    phone: { type: String, required: false, default: "" },
    email: { type: String, required: false, default: "" },
    birthDate: {type: Date, required: false, default: null},
    note: { type: String, required: false,default: "" },
    createdBy: { type: String, required: false , },
    updatedBy: { type: String, required: false },
    createdAt: { type: Date, default: Date.now(), required: true },
    updatedAt: { type: Date, required: false }
});

userSchema.index({'$**': 'text'});
userSchema.plugin(mongoosePaginate);
export default mongoose.model('User', userSchema);

