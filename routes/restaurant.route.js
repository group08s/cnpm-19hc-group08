var express = require('express');
var router = express.Router();

var controller = require('../controllers/restaurant.controller')

router.post('/createdish',controller.CreateRestaurant);

router.post('/listdish',controller.ListDish);

router.post('/categorydish',controller.CateRes);

router.post('/deletedish',controller.DeleteDish);

module.exports = router;