const express = require('express');
const path = require('path');
const regUtils = require(path.join(__dirname,'..','utils','industry-reg'));

const route = express.Router();

route.get('/industry-reg',regUtils.IndusLoginGet);

route.post('/industry-reg',regUtils.IndusLoginPost);


module.exports = route;