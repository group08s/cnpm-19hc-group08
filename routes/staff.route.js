var express = require('express');
var router = express.Router();

var test = require('../models/Staff');
var controller = require('../controllers/staff.controller');

/* GET users listing. */
router.post('/', function (req, res, next) {
    test.find(function (err, data) {
        if (err) {
            res.json({ result: 0 });
        } else {
            //console.log(data);
            res.json(data);
        }
    });
});

router.post('/addstaff', controller.AddStaff);

router.post('/api/liststaff',controller.ListStaff);

router.post('/api/onestaff', controller.FindOneStaff);

router.post('/deletestaff', controller.DeleteStaff);

module.exports = router;
