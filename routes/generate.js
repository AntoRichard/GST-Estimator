const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');
const fs = require('fs');
let transport = nodemailer.createTransport(sendGridTransport({
    auth: {
        api_key: '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'
    }
}));

const express = require('express');

const route = express.Router();


route.get('/generate', (req, res) => {
    let to, from;
    fs.readFile('username.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        to = data.split('-')[1];

        fs.readFile('indusName.txt', 'utf-8', (err, rr) => {
            if (err) throw err;
            from = rr.split('-')[1];
            console.log(`${from}-${to}`)
            transport.sendMail({
                to: 'melwaniamritaj@gmail.com',
                from: from,
                subject: 'hello world',
                html: '<h1>Hello world</h1>'
            }).then(result => {
                console.log(result);
                res.redirect('/ewayBill');
            }).catch(err => {
                console.log(err);
            });
        })
    });



});

module.exports = route;