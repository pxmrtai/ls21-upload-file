const md5 = require('md5')
const db = require('../db')


module.exports.resign=(req,res)=>{
  res.render('auth/resign')
 
}

module.exports.login = (req,res)=>{
  res.render('auth/login')

}
module.exports.postResign = (req,res)=>{
    db.get('user').push(req.body).write()
  res.redirect('/auth/login')
  
}
module.exports.postLogin = (req,res)=>{
var email = req.body.email
 var user= db.get('user').find({email:email}).value()
 console.log(user.isAdmin)
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
  var hashedPassword= md5(password)
if(user.password !== hashedPassword){
  res.render('auth/login',{
       errors:[
         'Wrong password.'
       ],
    values: req.body
     });
   return;
}
  console.log({ user });
  res.cookie('userId', user.id);
  
  if(user.isAdmin){
    res.redirect('/')
    return
  }
  
  res.redirect('/users/customer')
}
// giải thích cho anh xem hiện tại nó ra sao, và em muốn nó thành thế nào
// chỉ đơn giản là khoonget s em cứ nói đi nah có nghe thấy