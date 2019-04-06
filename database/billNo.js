const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
    billNo : Number
});

const BillModel = mongoose.model('billno', BillSchema);

// const n = {billNo:0};

// BillModel.create(n,(err,res)=>{
//     if(err) throw err;
//     console.log(res);
// })


module.exports = BillModel;