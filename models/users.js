var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    user: String,
    googleId: String,
    phrases: [],
    email: String,
    avatar: String,
    strengths: []
});

module.exports = mongoose.model("users", UserSchema);