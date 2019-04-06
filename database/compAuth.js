const mongoose = require('mongoose');

const compAuthSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    username: String,
    password: String
});

const compAuthModel = mongoose.model('CompAuth', compAuthSchema);


module.exports = compAuthModel;