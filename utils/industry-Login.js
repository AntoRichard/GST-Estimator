const path = require('path');
const compAuth = require(path.join(__dirname, '..', 'database', 'compAuth'));
const fs = require('fs');

exports.IndusLoginGet = (req, res) => {
    console.log(`${req.method} : ${req.url}`);

    res.render('industry_login');
}


exports.IndusLoginPost = (req, res) => {
    console.log(`${req.method} : ${req.url}`);

    let username = req.body.username;
    let password = req.body.password;
    console.log(password);
    compAuth.findOne({
        username:username
    }, (err, result) => {
        if (err) throw err;
        console.log(result);
        if (result.password === password) {
            res.redirect('/Gst-Estimator');
            let toStore = `${username}-${result.email}`
            fs.writeFile('indusName.txt',toStore,(err)=>{
                if(err) throw err;
                console.log(`written in indusName.txt`);
            })
        } else {
            res.redirect('/industry-reg');
        }
    });
}