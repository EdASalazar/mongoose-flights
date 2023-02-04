const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: { 
        type: String, 
        enum: ['American Airlines', 'Southwest', 'United'] 
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'San'],
        default: 'DEN'
    },
    flightNo: {
        // need to use regex to make it 10 to 9999
        type: Number, required: true,
        minlength: 2,
        maxLength: 4,
    },
    departs: {
        type: Date, 
        // can't get this to work
        default: Date.now
        
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);