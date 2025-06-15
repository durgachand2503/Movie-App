const mongoose = require('mongoose');

const DirectorSchema = new mongoose.Schema({
    name:String
});
module.exports = mongoose.model('directors',DirectorSchema);