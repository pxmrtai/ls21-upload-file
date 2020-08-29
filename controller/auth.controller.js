const md5 = require('md5')
const db = require('../db')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const shortid = require('shortid')



module.exports.resign=(req,res)=>{
  res.render('auth/resign')
 
}

module.exports.login = (req,res)=>{
  res.render('auth/login')

}
module.exports.postResign = async (req,res)=>{
  var password = req.body.password;
   req.body.id = shortid.generate();

  var hashPassword = await bcrypt.hash(password, saltRounds);
  req.body.password = hashPassword;
  console.log(req.body.password)
  
  db.get('user').push(req.body).write()
  res.redirect('/auth/login')
}
module.exports.postLogin = async (req,res)=>{
  var email = req.body.email
  var password = req.body.password
 
  var user= db.get('user').find({email:email}).value()
  
  if(!user){
     return res.render('auth/login',{
       errors:[
         'User does not exist.'
       ],
       values: req.body
     });
  }
  
  // bạn code logic compare đi, dùng async await
  // cái biến hash kia bạn phải lôi từ database ra, sai sai, bạn đã có biến user phía trên rồi
  // dạ...
  var isCorrectPassword = await bcrypt.compare(password, user.password);
  
  if(!isCorrectPassword){
    return res.render('auth/login',{
      errors:[
         'Wrong password.'
       ],
      values: req.body
   });
  }
  
  
  
  if(user.isAdmin){
    return res.redirect('/')
  }
   res.cookie('userId', user.id);
 
  res.redirect('/users/customer')
}
