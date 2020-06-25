const mongoose = require ('mongoose');

var schema = new mongoose.Schema({
    Author: String,
    Title: String,
    Content: String,
    Uploaded: String,
    Date: String,
    Imgs: Array
});

var Post =  mongoose.model('Post', schema);

module.exports  = Post;
