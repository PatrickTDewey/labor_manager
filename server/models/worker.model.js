const mongoose = require('mongoose');
const WorkerSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    availability: { type: Array, default: Array(7).fill(true)},
    working: {type: Object}
}, { timestamps: true });
module.exports.Worker = mongoose.model('Worker', WorkerSchema);

