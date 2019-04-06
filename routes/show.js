const express = require('express');
const path = require('path');

const show = require(path.join(__dirname,'..','utils','show'));

const route = express.Router();

route.get('/show',show.showGet);

module.exports = route;
