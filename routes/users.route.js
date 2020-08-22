var epxress = require('express');
var router = epxress.Router();
const db = require('../db')

const bodyParser = require('body-parser')

var controller = require('../controller/user.controller')
var validation = require('../validation/users.validation')
var authMiddleware = require('../middleware/auth.middleware')

router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// Set some defaults (required if your JSON file is empty)
db.defaults({ user: [] })
  .write()

router.get('/index',controller.index)
router.get('/create',controller.createUser)

router.get('/:id',controller.view)


router.get("/index/:id/delete",controller.delete)

router.post('/index',validation.createUser,controller.postIndex)

module.exports = router;