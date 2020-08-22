var epxress = require('express');
var router = epxress.Router();
const db = require('../db')
var controller = require('../controller/auth.controller')
router.get('/login',controller.login)

module.exports= router;