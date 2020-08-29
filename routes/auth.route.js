var epxress = require('express');
var router = epxress.Router();
const db = require('../db')


var controller = require('../controller/auth.controller')
router.get('/login',controller.login)
router.get('/resign',controller.resign)

router.post('/login',controller.postLogin)
router.post('/resign',controller.postResign)

module.exports= router;