const express = require('express');
const fs = require('fs');

const route = express.Router();

route.get('/logout',(req,res)=>{
    fs.writeFile('username.txt','',(err,result)=>{
        if(err) throw err;
        console.log('Session logout');
        res.redirect('/clear');
    });
});

module.exports = route;