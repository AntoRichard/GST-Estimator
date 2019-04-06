const mongoose = require('mongoose');
const Cryptr = require('cryptr');

const AuthDB = require('../database/auth');

const cryptr = new Cryptr('Hello World');

exports.registerGet = (req, res) => {
    console.log(`${req.method} : ${req.url}`);
    res.render('register');

}

exports.registerPost = (req, res) => {

    console.log(`${req.method} : ${req.url}`);

    let appName = req.body.appName;
    let tradeName = req.body.tradeName;
    let email = req.body.email;
    let phone = req.body.phone;
    let username = req.body.username;
    let password = req.body.password;

    let encyPassword = cryptr.encrypt(password);


    let data = {
        appName: appName,
        tradeName: tradeName,
        email: email,
        phone: phone,
        username: username,
        password: encyPassword
    }

    console.log('indise register route')
    AuthDB.create(data, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
    res.redirect('/login');
}