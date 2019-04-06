const express = require('express');
const path = require('path');
const compDetUtils = require(path.join(__dirname, '..', 'utils', 'companyDetails'));

const route = express.Router();

route.get('/company-details', compDetUtils.compDetailsGet);

route.post('/company-details', compDetUtils.compDetailsPost);


module.exports = route;