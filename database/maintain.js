const mongoose = require('mongoose');

let maintainSchema = new mongoose.Schema({
    username : String,
    gstNo: String,
    industryName: String,
    prod: String,
    quant: String,
    hsn: String,
    size: String,
    wards: String,
    way: String,
    vechNo: String,
    pod: String
});

let maintainModel = mongoose.model('Maintain', maintainSchema );

module.exports = maintainModel;