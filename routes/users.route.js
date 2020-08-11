var epxress = require('express');
var router = epxress.Router();
const db = require('../db')
const shortid = require('shortid')
const bodyParser = require('body-parser')

router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// Set some defaults (required if your JSON file is empty)
db.defaults({ user: [] })
  .write()

router.get('/index',(req,res)=>{
  res.render('users/index',{
    userList : db.get('user').value()
  })
})

router.get("/index/delete/:id", function(req, res) {
   var id = req.params.id;
   var users = db.get('users').find({id:id}).value()
    db.get("users")
     .remove({ id: req.params.id})
     .write()
    
 res.redirect('/users/index')
   console.log(req.params.id)
})

router.post('/index',(req,res)=>{
    req.body.id = shortid.generate();

    db.get('user').push(req.body).write()
    res.redirect('/users/index')
})

module.exports = router;