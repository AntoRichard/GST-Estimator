const path = require('path');
const eBillDB = require(path.join(__dirname, '..', 'database', 'eBill'));
// const BillNo = require(path.join(__dirname,'..','database','billNo'));
const ValueGoods = require('../Algo/valueGoods');
const fs = require('fs');


exports.EwayBillGet = (req, res) => {
    console.log(`${req.method} : ${req.url}`);

    fs.readFile('billNo.txt', 'utf-8', (err, no) => {
        if (err) throw err;
        fs.readFile('username.txt', 'utf-8', (err, uName) => {
            if (err) throw err;
            // console.log(uName)
            eBillDB.findOne({
                username: uName.split('-')[0]
            }, (err, callback) => {
                if (err) throw err;
                console.log(callback);

                let d = new Date();
                let picName = `${uName.split('-')[0]}`
                let date = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
                let value = ValueGoods(callback.quant,callback.size,callback.prod);//KG && 10
                res.render('ewaybill', {
                    data: callback,
                    billno: no,
                    date : date,
                    val : value
                });
            })

        });
    });



}