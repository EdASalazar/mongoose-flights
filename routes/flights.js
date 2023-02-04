var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// all routes start with '/flights'

// GET /flights index
router.get('/', flightsCtrl.index);
// GET /flights/new 
router.get('/new', flightsCtrl.new);
// POST /movies



module.exports = router;
