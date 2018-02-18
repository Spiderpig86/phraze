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
                    user: profile.displayName,
                    googleId: profile.id,
<<<<<<< HEAD
                    email: profile.emails[0].value,
                    avatar: profile._json.image.url
                
=======
                    phrases: [],
                    email: profile.emails[0].value,
                    avatar: profile._json.image.url
>>>>>>> 7e862c990594e1574281727914c7eb55cfd8cbcf
                }).save().then((newUser)=>{
                    done(null, newUser);
                });
            }
        });
    })
);