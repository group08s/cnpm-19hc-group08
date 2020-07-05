const express = require('express');
const router = express.Router();
const controller = require('../controllers/payment.controller');

router.post('/addpayment',controller.addPayment);

router.post('/paymentrestaurant',controller.addpaymentrestaurant);
module.exports = router;