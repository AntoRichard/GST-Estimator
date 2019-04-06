const express = require('express');
const path = require('path');

const loginUtils = require(path.join(__dirname,'..','utils','login'));

const route = express.Router();

route.get('/login',loginUtils.loginGet);

route.post('/login',loginUtils.loginPost);

module.exports = route;