const db = require('../db')
const shortid = require('shortid')

module.exports.rental=(req,res)=>{
  res.render('userOnly/rental',{
    rentalList: db.get('rentalList')
  })
}

module.exports.customer = (req,res)=>{
  var listBook = db.get('list').value()
  res.render('userOnly/customer',{
    listBook : db.get("list").value(),
    listUser : db.get("user").value(),
    rentalList : db.get('rentalList').value()
  })
 
}
module.exports.userLogin = (req,res)=>{
  console.log(req.cookies.userId)
  var user = db.get('user').value();
  res.render('userOnly/index',{
        user: user
    })
}
module.exports.index = (req,res)=>{
  
  res.render('users/index',{
    userList : db.get('user').value()
  })
}
module.exports.view = (req,res)=>{
    var id = req.params.id;
    var user = db.get('user').find({id:id}).value();
    res.render('users/view',{
        user: user
    })
}
module.exports.delete =  function(req, res) {
     db.get("user")
     .remove({ id: req.params.id})
     .write()
     
 res.redirect('/users/index')
}
module.exports.createUser =(req,res)=>{
  res.render('users/create',{
   
  })
  
}
module.exports.postIndex = (req,res)=>{
    req.body.id = shortid.generate();
    var email = req.body.email
 var user= db.get('user').find({email:email}).value()
 if(user){
     res.render('users/create',{
       errors:[
         'User already existed.'
       ],
       values: req.body
     });
   return;
 }
    db.get('user').push(req.body).write()
    
    res.redirect('/users/index')
}