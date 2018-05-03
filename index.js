const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const https = require('https');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const ejs = require('ejs');
const passport = require('passport');
const app = express();

mongoose.connect('mongodb://localhost/usersu');
mongoose.Promise = global.Promise;
app.set('view engine', 'ejs');

const directoryToServe = 'client';

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({secret:'keyboard cat', resave: false, saveUninitialized: true, cookie:{secure: false}}));
app.use(passport.initialize());
app.use(passport.session());
app.use(require('./routes/api'));
app.use(require('./config/passport'));


const httpsOptions = {
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'))
}


app.use(function(err,req,res,next){
    console.log(err._message);
    res.status(422).send({
        error: err.message
    });
});

const port = process.env.port || 3000;

https.createServer(httpsOptions, app)
    .listen(port, function(err){
        if(err) return console.log(err);
        console.log('listening on  port ' + port);
});