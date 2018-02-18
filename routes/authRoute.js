var router = require('express').Router();
var passport = require('passport');

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res)=>{
    res.redirect('/');
});

router.get('/logout', (req, res)=>{
    req.logout();
    res.redirect('/');
});

module.exports = router;
