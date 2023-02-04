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
        type: Number, required: true
    },
    departs: {
        type: Date, 
        // can't get this to wokr
        default: function() {
            return new Date().getFullYear;
        },
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);