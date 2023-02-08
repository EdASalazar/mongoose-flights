const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const ticketSchema = new Schema ({
    seat: {
        type: String,
    },
    price: {
        type: Number,
        min: 0,
    },
    flight: {
        type: isObjectIdOrHexString,
        ref: 'Flight',
    },

});