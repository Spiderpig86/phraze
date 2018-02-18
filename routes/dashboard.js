var express = require('express');
var router = express.Router();
var users = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Phraze', user: req.user });

  var user_phrases = [];
  users.find({}, function(err, data) {
    if(err) console.log(error);
    
    if(data) {
        user_phrases.push(data);
    }
  });

});

module.exports = router;
