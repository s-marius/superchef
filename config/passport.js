const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const configAuth = require('./auth');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const User = require('../models/user');
const path = require('path');
const app = express();


app.use(session({secret:'keyboard cat', resave: false, saveUninitialized: true, cookie:{secure: false}}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new FacebookStrategy({
        clientID: configAuth.facebookAuth.clientID,
        clientSecret: configAuth.facebookAuth.clientSecrets,
        callbackURL: configAuth.facebookAuth.callbackURL,
        profileFields: ['emails','displayName', 'friends', 'photos', 'id','name','profileUrl']
    },
    function(accessToken, refreshToken, profile, done) {
        process.nextTick(function(){
            User.findOne({'id':profile.id},function(err, user){
                if(err) {
                    return done(err);
                    console.log(err);
                }
                if(user){
                    return done(null,user);
                    }else{
                    const newUser = new User();
                    newUser.id = profile.id;
                    newUser.token = accessToken;
                    newUser.name = profile.displayName;
                    newUser.email = profile.emails[0].value;
                    newUser.friends = "loading..";
                    newUser.rank = 'Unranked';
                    newUser.cookies = 0;
                    newUser.totalScore = 0;

                    newUser.save(function(err){
                        if(err) return console.log(err);
                        return done(null, newUser);
                    });
                }
            });
        });
    }
));


app.use('/profile', function(req,res){
    res.render('../public/profile.ejs', {users: req.user});
});

app.get('/', isLoggedIn, function(req,res){

});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        res.render('../public/profile.ejs', {users: req.user});
    }else{
        res.render('../public/index.ejs');
    }
}

app.get('/users/:id',function(req,res){
    User.findById({_id: req.params.id}).then(function(user){
        // res.json(users);
        res.send(user);
    });
});


app.put('/users/:id',function(req, res, next){
    User.findByIdAndUpdate({_id: req.params.id},req.body,{new: true},function(user){
        res.send(user);
    });
});

app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email', 'user_friends']}));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {successRedirect: '/profile', failureRedirect: '/' }));

module.exports = passport;
module.exports = app;