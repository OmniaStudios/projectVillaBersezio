const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

var adminSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    UserIMG: String
})

var Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;