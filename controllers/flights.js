const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
};

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', { flights });
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const newFlight = new Flight(req.body);
    // const dt = newFlight.departs;
    // let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    // departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    // res.render('flights/new', { departsDate });


    newFlight.save(function (err) {
        if (err) return res.redirect('/flights/new');
        // console.log(flight);
        res.redirect('/flights');
    });
}