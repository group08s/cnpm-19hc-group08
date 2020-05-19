var express = require('express');
var router = express.Router();

var controller = require('../controllers/room.controller');

router.post('/createroom',controller.AddRoom);

router.post('/api/findfloor',controller.findFloor);

router.post('/api/findroom',controller.findRoom);

router.post('/api/findroomempty',controller.findRoomEmpty);

router.post('/api/deleteroom',controller.deleteRoom);

module.exports = router;