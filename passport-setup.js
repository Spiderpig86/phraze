var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var keys = require('./keys');
var User = require('./models/users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: keys.keys.clientId,
    clientSecret: keys.keys.secretKey
    }, (accessToken, refreshToken, profile, done)=> {
        User.findOne({googleId: profile.id}).then((currentUser)=>{
            if(currentUser){
                done(null, currentUser);
            }
            else{
                new User({
                    users: profile.displayName
                }).save().then((newUser)=>{
                    done(null, newUser);
                });
            }
        });
    })
);