const db = require('../db')
const shortid = require('shortid')

module.exports.index = (req,res)=>{
  res.render('users/index',{
    userList : db.get('user').value()
  })
}
module.exports.view = (req,res)=>{
    var id = req.params.id;
    var user = db.get('user').find({id:id}).value();
    res.render('users/view',{
        list: user
    })
}
module.exports.delete =  function(req, res) {
     db.get("user")
     .remove({ id: req.params.id})
     .write()
     
 res.redirect('/users/index')
}

module.exports.postIndex = (req,res)=>{
    req.body.id = shortid.generate();

    db.get('user').push(req.body).write()
    
    res.redirect('/users/index')
}