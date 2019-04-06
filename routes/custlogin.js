const express = require('express');
const path = require('path');

const custUtils = require(path.join(__dirname,'..','utils','custlogin'));

const route = express.Router();

route.get('/customer-login',custUtils.getCust);

route.post('/customer-login',custUtils.postCust);


module.exports = route;
