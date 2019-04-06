const express = require('express');
const path = require('path');

const EntryUtils = require(path.join(__dirname,'..','utils','entry'));

const route = express.Router();

route.get('/entry',EntryUtils.getEntry);
route.post('/entry',EntryUtils.postEnter);

module.exports = route;