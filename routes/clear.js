const express = require('express');
const path = require('path');
const eBillNo = require(path.join(__dirname,'..','database','eBill'));

const route = express.Router();

route.get('/clear',(req,res)=>{
    eBillNo.remove({},(err,out)=>{
        if(err) throw err;
        console.log(out);
        res.redirect('/');
    });
        
});

module.exports = route;