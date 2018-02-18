var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    users : [{
        googleId : String,
        username : String,
        phrases  : [String]
    }]

});

module.exports = mongoose.model("users", UserSchema);