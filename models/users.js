var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
    users: Array
});

module.exports = mongoose.model("users", UserSchema);