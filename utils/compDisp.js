const fs = require('fs');
const path = require('path');

const maintainDB = require(path.join(__dirname,'..','database','maintain'));

exports.dispGet = (req,res)=>{
    fs.readFile('indusName.txt','utf-8',(err,name)=>{
        if(err) throw err;
        maintainDB.find({},(err,data)=>{
            if(err) throw err;
            console.log(data);
            res.render('compDisp',{
                data:data,
                name:name.split('-')[0]
            });
        });
    })
}