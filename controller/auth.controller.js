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
  res.render('auth/login',{
    sucess:[
      'sign up sucessful'
    ]
  })
}

module.exports.postLogin = async (req,res)=>{
  var email = req.body.email
  var password = req.body.password
 

 
  var user= db.get('user').find({email:email}).value()
  
  if(!user){
  //   var wrongTime = db.get('login').value()
  //   console.log(wrongTime)
  //    var dbs=db.get('login')
  //      .find({userNameWrong:wrongTime.userNameWrong})
  //      .assign({userNameWrong: wrongTime.userNameWrong+1})
  //      .write()
  // console.log(dbs)
    db.update('count', n => n + 1)
  .write()
     return res.render('auth/login',{
       
       errors:[
         'User does not exist.'
       ],
       values: req.body
       
     });
  }
  var isCorrectPassword = await bcrypt.compare(password, user.password);
  
  if(!isCorrectPassword){
   
      var email = req.body.email
     
    var a=  db.get('user').find({email:email}).assign({isLogin: user.isLogin+1}).write()
    console.log(a)
      
    return res.render('auth/login',{
      errors:[
         'Wrong password.'
       ],
      values: req.body
   });
  }
  
  
  res.cookie('userId', user.id,{
    signed: true,
    sameSite: 'None',
    secure: true
  }
            );
  if(user.isAdmin){
    res.redirect('/')

  }
   
  res.redirect('/users/customer')
}
