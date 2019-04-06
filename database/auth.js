const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
    appName: String,
    tradeName: String,
    email: String,
    phone: Number,
    username: String,
    password: String
});

const AuthModel = mongoose.model('Auth', AuthSchema);


module.exports = AuthModel;