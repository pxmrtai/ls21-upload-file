const express = require('express')
var router = epxress.Router();
const db = require('../db')
const shortid = require('shortid')





// Set some defaults (required if your JSON file is empty)
db.defaults({ user: [] })
  .write()


module.exports = router;