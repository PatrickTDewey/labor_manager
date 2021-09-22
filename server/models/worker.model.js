const mongoose = require('mongoose');
const WorkerSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: [true, "First Name is required"] },
    lastName: { 
        type: String,
        required: [true, "Last Name is required"] },
    availability: { type: Array, default: Array(7).fill(true)},
    working: {type: Object}
}, { timestamps: true });
module.exports.Worker = mongoose.model('Worker', WorkerSchema);

