const express = require('express');
const path = require('path');
const regUtils = require(path.join(__dirname,'..','utils','industry-Login'));

const route = express.Router();

route.get('/industry-login',regUtils.IndusLoginGet);

route.post('/industry-login',regUtils.IndusLoginPost);

module.exports = route;