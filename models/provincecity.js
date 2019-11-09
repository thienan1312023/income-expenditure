import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProvincecitySchema = new Schema({
    ProvinceCityId: {type: String, required: true, unique: true},
    ProvinceCityName: {type: String, required: true},
    CountryId:{type: Number, required: true}
});

ProvincecitySchema.index({ProvinceCityName: "text"});

export default mongoose.model('Provincecity', ProvincecitySchema);

