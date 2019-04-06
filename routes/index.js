const express = require('express');
const path = require('path');
const indexUtils = require(path.join(__dirname,'..','utils','index'));

const route = express.Router();

route.get('/',indexUtils.indexGet);


module.exports = route;