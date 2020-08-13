var epxress = require('express');
var router = epxress.Router();
const db = require('../db')
const shortid = require('shortid')
const bodyParser = require('body-parser')

router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// Set some defaults (required if your JSON file is empty)
db.defaults({ rentalList: [] })
  .write()
router.get("/collection",(req,res)=>{
  res.render("transaction/collection",{
    
  })
})
router.get("/create",(req,res)=>{
  res.render("transaction/create",{
    
  })
})


module.exports= router;