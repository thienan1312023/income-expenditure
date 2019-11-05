var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const typeDevotionSchema = new Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    createdBy: {type: String, required: false},
    updatedBy: {type: String, required: false},
    createdAt:{type: Date, default: Date.now(), required: true},
    updatedAt: {type: Date, required: false}
});

module.exports = mongoose.model('typeDevotion', typeDevotionSchema);

