// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
//
const Router = require('express').Router
const router = new Router()
const controller = require("../controllers/index")

router.get('/', controller.getIndex)
module.exports = router;