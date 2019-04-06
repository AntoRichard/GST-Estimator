const express = require('express');
const path = require('path');

const gstUtils = require(path.join(__dirname,'..','utils','gstest'));

const route = express.Router();

route.get('/Gst-Estimator',gstUtils.getgst);

route.post('/Gst-Estimator',gstUtils.postgst);


module.exports = route;
