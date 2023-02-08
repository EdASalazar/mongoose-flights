const Ticket = require('../models/ticket');
const Flight = require('../models/flight');


module.exports = {
    create,
    new: newTicket,
};
function create(req, res) {
  Ticket.create(req.body, function (err, ticket) {
    res.render('tickets/new', { flightId: req.params.id } );
  });
}

function newTicket(req, res) {
  res.render('tickets/new', { flightId: req.params.id } );
}