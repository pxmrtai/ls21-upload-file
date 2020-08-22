const db = require('../db')


module.exports.login = (req,res)=>{
  res.render('auth/login')

}
module.exports.postLogin = (req,res)=>{
  var email = req.body.email
 var user= db.get('user').find({email:email}).value()
 var password = req.body.password
 if(!user){
     res.render('auth/login',{
       errors:[
         'User does not exist.'
       ],
       values: req.body
     });
   return;
 }
if(user.password !== password){
  res.render('auth/login',{
       errors:[
         'Wrong password.'
       ],
    values: req.body
     });
   return;
}
  res.redirect('/')
}