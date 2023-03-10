const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SFO'],

    },
    arrival: {
        type: Date,
    },
}, {
    timestamps: true
});


const flightSchema = new Schema({
    airline: { 
        type: String, 
        enum: ['American Airlines', 'Southwest', 'United'] 
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SFO'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date, 
        default: Date.now() + 365*24*60*60000
    },
    destinations: [destinationSchema],
    ticket: {
        type: Schema.Types.ObjectId,
        ref: 'Ticket',
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);