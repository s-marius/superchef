const express = require('express');
const router = express.Router();
const User = require('../models/user');

// get a list of ninjas from the db
// // add a new user to the db
// router.post('/login',function(req,res, next) {
//
// });
//


//update a user in the db
// router.put('/users/:id',function(req, res, next){
//     User.findByIdAndUpdate({_id: req.params.id},{cookies: req.body.cookies},{new: true},function(user){
//         res.send(user);
//     });
// });


//
// // delete a user from the db
// router.delete('/users/:id',function(req,res){
//     res.send({type: 'DELETE'});
// });

module.exports = router;