const express = require('express');
const router = express.Router();
const controller = require('../controllers/payment.controller');

router.post('/addpayment',controller.addPayment);

module.exports = router;