const mongoose = require('mongoose');
const WorkerSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    availability: { type: Array, default: Array(7).fill(0)},
    working: {type: Object, default:  {
        '9:00': Array(7).fill(0),
        '9:30': Array(7).fill(0),
        '10:00': Array(7).fill(0),
        '10:30': Array(7).fill(0),
        '11:30': Array(7).fill(0),
        '11:30': Array(7).fill(0),
        '12:00': Array(7).fill(0),
        '12:30': Array(7).fill(0),
        '13:00': Array(7).fill(0),
        '13:30': Array(7).fill(0),
        '14:00': Array(7).fill(0),
        '14:30': Array(7).fill(0),
        '15:00': Array(7).fill(0),
        '15:30': Array(7).fill(0),
        '16:00': Array(7).fill(0),
        '16:30': Array(7).fill(0),
        '17:00': Array(7).fill(0),
        '17:30': Array(7).fill(0),
        '18:00': Array(7).fill(0),
        '18:30': Array(7).fill(0),
        '19:00': Array(7).fill(0),
        '19:30': Array(7).fill(0),
        '20:00': Array(7).fill(0),
        '20:30': Array(7).fill(0),
        '21:00': Array(7).fill(0),
        '21:30': Array(7).fill(0),
        '22:00': Array(7).fill(0),
    }}
}, { timestamps: true });
module.exports.Worker = mongoose.model('Worker', WorkerSchema);

