const express = require('express');
const path = require('path');
const ewayUtils = require(path.join(__dirname,'..','utils','ewayBill'));

const route = express.Router();

route.get('/ewayBill',ewayUtils.EwayBillGet);


module.exports = route;