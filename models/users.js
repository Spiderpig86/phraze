var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
    users: Array,
    googleId: String
});

module.exports = mongoose.model("users", UserSchema);