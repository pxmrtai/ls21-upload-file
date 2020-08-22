const db = require('../db')


module.exports.notExist = (req,res,next)=>{
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
}