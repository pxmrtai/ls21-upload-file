const db = require('../db')


module.exports.notExist = (req,res,next)=>{

  var email = req.body.email
  var user= db.get('user').find({email: req.body.email}).value()
  console.log(user)
  console.log('asd'+ req.body.email)

  if(user=undefined){
    res.render('transaction/create',{
      errors:[
        'email does not exist'
      ],
      values: req.body
      
    })
     
  }
   next()
}