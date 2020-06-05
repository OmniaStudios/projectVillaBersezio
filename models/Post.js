const mongoose = require ('mongoose');

var schema = new mongoose.Schema({
    Author: String,
    Title: String,
    Img: Array,
    Comment: Array,
    Like: String,
    Dislike: String
});

var Post =  mongoose.model('Post', schema);

module.exports  = Post;