const Ticket = require('../models/ticket');
const Flight = require('../models/flight');


module.exports = {
    create,
    new: newTicket,
};

function create(req, res) {
  Ticket.create(req.params.id, function (err, ticket) {
    ticket.flight.push(req.body.flightId);
    ticket.save(function(err) {
    res.render('tickets/new', { flightId: req.params.id } )
    });
  });
}

function newTicket(req, res) {
  res.render('tickets/new', { flightId: req.params.id } );
}