const db = require('../db')


module.exports.createUser = (req,res,next)=>{
  var checkName = req.body.name
    var user= db.get('user').value()
  var email = db.get('user').find({email:user.email}).value()
  if(!email){
    res.render('users/create',{
      errors:[
        'email does not exist'
      ],
      values: req.body
      
    })
  }
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