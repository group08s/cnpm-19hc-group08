const express = require('express');
const route = express.Router();

const controller = require('../controllers/ServiceCustomer.controller');

route.post('/addrestaurant', controller.addRestaurant);

route.post('/addservice',controller.addService);

route.post('/findid',controller.findProfileCustomer);
module.exports = route;