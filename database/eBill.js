const mongoose = require('mongoose');

let eBillSchema = new mongoose.Schema({
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
    pod: String,
    imageName: String
});

let eBillModel = mongoose.model('EBill', eBillSchema);

module.exports = eBillModel;