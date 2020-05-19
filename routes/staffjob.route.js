var express = require('express');
var router = express.Router();

const controller = require('../controllers/staffjob.controller');

router.post('/',controller.liststaff);

router.post('/api/onestaff',controller.findOneStaff);
module.exports = router;