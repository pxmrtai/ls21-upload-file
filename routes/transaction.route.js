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
router.get("/index",(req,res)=>{
  res.render("transaction/index",{
      listBook : db.get("list").value(),
     listUser : db.get("user").value(),
     rentalList : db.get('rentalList').value()
  })
})

router.get("/create",(req,res)=>{
  res.render("transaction/create",{
     listBook : db.get("list").value(),
     listUser : db.get("user").value(),
  })
  
})


router.post('/create',(req,res)=>{
    req.body.id = shortid.generate();
   
    db.get('rentalList').push(req.body).write()
    res.redirect('/transaction/index')
})

module.exports= router;