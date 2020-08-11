var epxress = require('express');
var router = epxress.Router();
const db = require('../db')
const shortid = require('shortid')
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// Set some defaults (required if your JSON file is empty)
db.defaults({ user: [] })
  .write()

router.get('/index',(req,res)=>{
  res.render('users/index',{
    userList : db.get('user').value()
  })
})
router.post('/index',(req,res)=>{
  res.render('user/index',{
     
   
  })
})

module.exports = router;