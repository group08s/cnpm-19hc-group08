var express = require('express');
var router = express.Router();

var controller = require('../controllers/restaurant.controller')

router.post('/createdish',controller.CreateRestaurant);

router.get('/listdish',controller.ListDish);

router.get('/categorydish',controller.CateRes);

router.post('/deletedish',controller.DeleteDish);

module.exports = router;