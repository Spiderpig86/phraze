var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/phrases');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Phraze' });
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
