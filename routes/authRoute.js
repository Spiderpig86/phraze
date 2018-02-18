var router = require('express').Router();
var passport = require('passport');

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res)=>{
    res.redirect('/profile');
});

router.get('/poll', (req, res)=>{
    res.redirect('/poll');
});

module.exports = router;
