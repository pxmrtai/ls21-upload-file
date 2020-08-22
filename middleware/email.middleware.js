const db = require('../db')


module.exports.notExist = (req,res,next)=>{
  var user= db.get('user').value()
  var email = db.get('user').find({email:user.email}).value()
  console.log(email)
  if(!email){
    res.render('transaction/create',{
      errors:[
        'email does not exist'
      ],
      values: req.body
      
    })
    
  }
  next()
}