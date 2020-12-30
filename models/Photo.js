const mongoose = require('mongoose');

var schema = new mongoose.schema({
    Link: {
        type: String,
        required: true
    }
});

var Photo = mongoose.model('Photo', schema);
module.exports = Photo;