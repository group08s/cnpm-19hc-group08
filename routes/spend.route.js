const express = require('express');
const router = express.Router();

const controller = require('../controllers/spend.controller');

router.post('/addspend',controller.addSpend);

router.post('/api/listspend',controller.listSpend);

router.post('/api/findonespend',controller.findOneSpend);

module.exports = router;