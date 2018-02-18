var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
    Users: Array,
    GoogleId: String,
    Phrases: Array
});

module.exports = mongoose.model("used_phrases", UserSchema);