var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/phrases');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Phrases' });

    model.find({}, function (err, data) {
        if (err) {
            throw err;
        }

        console.log(data);
    });
});

router.get('/get-data', function(req, res, next) {
    var cursor = model.find({}, function(err, db) {

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

router.



module.exports = router;
