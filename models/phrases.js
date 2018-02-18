var mongoose = require('mongoose');
var PhraseSchema = mongoose.Schema({
    Phrases: Array
});

module.exports = mongoose.model("used_phrases", PhraseSchema);