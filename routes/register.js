const express = require('express');

const path = require('path');

const registerUtils = require(path.join(__dirname,'..','utils','register'));

const route = express.Router();

route.get('/register',registerUtils.registerGet);

route.post('/register',registerUtils.registerPost);

module.exports = route;