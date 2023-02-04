const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
};

function index(req, res) {
    
res.render('flights/index');

}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
}