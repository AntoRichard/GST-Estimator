const path = require('path');
const gstCalc = require(path.join(__dirname,'..','Algo','gst'));
const fs = require('fs');
exports.getgst = (req, res) => {
    fs.readFile('gstOut.txt','utf-8',(err,data)=>{
        if(err) throw err;

        res.render('gstest');
    })
    
}

exports.postgst = (req,res)=>{
    let amount = req.body.turnover;
    let prod = req.body.prod;

    
}