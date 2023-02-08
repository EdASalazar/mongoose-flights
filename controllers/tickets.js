const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create,
    new: newTicket,
};

function create(req, res) {
    req.body.price;
    Ticket.create(req.body, function () {
        
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