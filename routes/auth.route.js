var epxress = require('express');
var router = epxress.Router();
const db = require('../db')
var controller = require('../controller/login.controller')
router.get('/login',controller.login)

module.exports= router;