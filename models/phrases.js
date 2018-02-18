var mongoose = require('mongoose');
var PhraseSchema = mongoose.Schema({
    phrases: Array
});

module.exports = mongoose.model("used_phrases", PhraseSchema);