const express = require('express');
const path = require('path');

const compDisp = require(path.join(__dirname,'..','utils','compDisp'));

const route = express.Router();

route.get('/comp-display',compDisp.dispGet);

module.exports = route;
