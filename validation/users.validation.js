const db = require('../db')


module.exports.createUser = (req,res,next)=>{
  var checkName = req.body.name
 
    var errors = []
    if(checkName.length > 30){
      errors.push("maximun is 30 words")
    }
    if(!req.body.name){
      errors.push('Name is quired')``
    }
    if(errors.length){
      res.render('users/create',{
     errors: errors
        
  })
     
      return;
    }
  next()
}