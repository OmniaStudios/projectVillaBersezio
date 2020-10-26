const mongoose = require ('mongoose');

var schema = new mongoose.Schema({
    Author: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Content: {
        type: String,
        required: true
    },
    Uploaded: String,
    Date: String,
    Hour: String,
    Imgs: Array
});

var Post =  mongoose.model('Post', schema);
module.exports  = Post;
