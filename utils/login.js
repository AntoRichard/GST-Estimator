const Cryptr = require('cryptr');
const fs = require('fs');
const cryptr = new Cryptr('Hello World');

const AuthDB = require('../database/auth');

exports.loginGet = (req, res) => {
    res.render('login');
    console.log(`${req.method} : ${req.url}`);
}

exports.loginPost = (req, res) => {
    console.log(`${req.method} : ${req.url}`);

    let username = req.body.username;
    let password = req.body.password;

    // console.log(username);
    AuthDB.findOne({
        username
    }, (err, result) => {
        if (err) throw err;
        let decyPassword = cryptr.decrypt(result.password);
        console.log(result);
        console.log(decyPassword+"==="+req.body.password);
        if (decyPassword === req.body.password) {
            let toStore = `${username}-${result.email}`;
            fs.writeFile('username.txt',toStore,(err)=>{
                if(err) throw err;
                console.log('saved');
                res.redirect('/entry');
            });
            console.log(result);
            
        }else{
            res.redirect('/register');
        }
    });

}