var express = require('express');
var mongoose = require('mongoose');
var model = require('../models/phrases');
var zxcvbn = require('zxcvbn');
var router = express.Router();

// mongoose.connect('mongodb://smfc:cewit%401500!@ds239968.mlab.com:39968/phrzae-db')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Phraze' , user:req.user});
    console.log(zxcvbn('hello'));
});

router.get('/get-data', function(req, res, next) {
    var result = [];
    model.find({}, function(err, data) {
        result.push(data);
    });
});

router.post('/insert', function (req, res, next) {
    var googleId = {
        // Get token from authenticator.
    }

    model.insertOne(googleId, function(err, result) {
        model.db.close();
    });
});

router.post('/update', function(req, res, next) {
    //model.updateOne();
});

router.delete('/delete', function(req, res, next) {
    //model.deleteOne();
});

module.exports = router;
