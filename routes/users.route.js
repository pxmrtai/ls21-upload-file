var epxress = require('express');
var router = epxress.Router();
const db = require('../db')
const shortid = require('shortid')

// Set some defaults (required if your JSON file is empty)
db.defaults({ user: [] })
  .write()

router.get('/users/index',(req,res)=>{
  res.render('/users/index',{
    
  })
})




module.exports = router;