const Ticket = require('../models/ticket');
const Flight = require('../models/flight');
const ticket = require('../models/ticket');

module.exports = {
    create,
    new: newTicket,
};

function create(req, res) {
    // get flight from the req.params.id
    // push the seat and price to the ticket objct
    let flight = (req.params.id);
    flight.tickets.push(req.body);
    flight.save(function (err) {
    
    res.redirect(`/flights/${flight._id}/new`);


    });
}

function newTicket(req, res) {
    Ticket.find({}).sort('price').exec(function (err, tickets) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            tickets
        });
    });
}