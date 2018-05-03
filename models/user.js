const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create user Schema and model

const UserSchema = new Schema({
        id: String,
        token: String,
        email: String,
        name: String,
    friends: String,
    rank: String,
    cookies: Number,
    totalScore: Number
});

const User = mongoose.model('user', UserSchema);

module.exports = User;