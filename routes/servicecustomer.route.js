const express = require('express');
const route = express.Router();

const controller = require('../controllers/ServiceCustomer.controller');

route.post('/addrestaurant', controller.addRestaurant);

route.post('/addservice',controller.addService);

route.post('/findid',controller.findProfileCustomer);

route.post('/findroom',controller.findRoomCustomer);

route.post('/findlistroom',controller.findListRoom);

route.post('/findroompayment',controller.findRoomCustomer_payment);
module.exports = route;