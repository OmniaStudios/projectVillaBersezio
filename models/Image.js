const mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    link:{
        type: String,
        required: true
    }
});

var Image = mongoose.model('Image', imageSchema);
module.exports = Image;