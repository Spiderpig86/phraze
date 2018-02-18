var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    user: String,
    googleId: String,
    phrases: [],
    email: String,
    avatar: String
});

module.exports = mongoose.model("users", UserSchema);