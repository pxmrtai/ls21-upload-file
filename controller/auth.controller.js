const db = require('../db')


module.exports.login = (req,res)=>{
  res.render('auth/login')

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
if(user.password !== password){
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