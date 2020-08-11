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
router.get('/:id',(req,res)=>{
    var id = req.params.id;
    var user = db.get('user').find({id:id}).value()
    res.render('/users/view',{
        list: user
    })
})
router.get("/index/:id/delete", function(req, res) {
     db.get("user")
     .remove({ id: req.params.id})
     .write()
     
 res.redirect('/users/index')
})

router.post('/index',(req,res)=>{
    req.body.id = shortid.generate();

    db.get('user').push(req.body).write()
  
    res.redirect('/users/index')
})

module.exports = router;