var express = require('express');
var router = express.Router();

const controller = require('../controllers/customer.controller');

router.post('/addcustomer',controller.addCustomer);

router.post('/api/listcustomer',controller.ListCustomer);

router.post('/api/onecustomer',controller.findOneCustomer);

// update name customer
router.post('/updatenamecustomer',controller.updatecustomer);

module.exports = router;