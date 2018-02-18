var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    user: String,
    googleId: String,
    phrases: []
});

module.exports = mongoose.model("users", UserSchema);