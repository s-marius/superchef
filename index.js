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

mongoose.connect('mongodb://admin:sa5Mmia95@ds117070.mlab.com:17070/superchef');
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

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'),function(){
   console.log('Node app is running on port', app.get('port'));
});