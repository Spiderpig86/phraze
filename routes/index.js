var express = require('express');
var mongoose = require('mongoose');
var model = require('../models/phrases');
var zxcvbn = require('zxcvbn');
var router = express.Router();
var generatePassphrase = require('eff-diceware-passphrase');

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

// POST request for requesting a passphrase
router.post('/generate', function(req, res, next) {
    var keyword_num = parseInt(req.body.numwords);
    var keyword_index = Math.floor(Math.random() *  Math.floor(keyword_num));
    var keyword = req.body.seed;

    // We need to generate the keywords for the pass phrase
    let phrases = generatePassphrase(keyword_num);
    phrases.splice(keyword_index, 0, keyword);
    
    console.log(phrases);

    // Iterate over phrases and collate into a sentence
    let phrase = '';
    for (let word of phrases) {
        phrase += word + ' ';
    }
    res.send(phrase); // Return the response
});

// POST request for requesting a passphrase
router.get('/rand', function(req, res, next) {

    // We need to generate the keywords for the pass phrase
    res.send(generatePassphrase(1)); // Return the response
});

router.post('/update', function(req, res, next) {
    //model.updateOne();
});

router.delete('/delete', function(req, res, next) {
    //model.deleteOne();
});

module.exports = router;
