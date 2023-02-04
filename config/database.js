const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

// shortcut va to mongoose.connection obj

const db = mongoose.connection;

db.on('connected', function(){
    console.log('Connected to MongodB ${db.name} at ${db.host}:${db.port}');
});