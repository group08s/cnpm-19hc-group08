const express = require('express');
const route = express.Router();


const controller = require('../controllers/servive.controller');
route.post('/addservice',controller.addService);

route.post('/deleteservice',controller.deleteService);

route.post('/listservice',controller.listService);
module.exports = route;