const mongoose = require('mongoose');
const schema = mongoose.schema;

var imageSchema = new Schema({
    link:{
        type: String,
        required: true
    }
});

var Image = mongoose.model('Image', imageSchema);
module.export = Image;