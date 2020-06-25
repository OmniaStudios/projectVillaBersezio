const mongoose = require ('mongoose');

var schema = new mongoose.Schema({
    Author: String,
    Title: String,
    Content: String,
    Uploaded: String,
    Date: String,
    Imgs: Array,
    Comments: Array,
    Likes: String,
    Dislikes: String
});

var Post =  mongoose.model('Post', schema);

module.exports  = Post;