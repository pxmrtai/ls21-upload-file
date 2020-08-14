
const db = require('../db')
const shortid = require('shortid')




module.exports.rentalIndex = (req,res)=>{
  res.render("transaction/index",{
      listBook : db.get("list").value(),
     listUser : db.get("user").value(),
     rentalList : db.get('rentalList').value()
  })
}
module.exports.view = (req,res)=>{
    var id = req.params.id;
    var book = db.get('list').find({id:id}).value()
    res.render('view',{
        list: book
    })
}
module.exports.createRentalList =(req,res)=>{
  res.render("transaction/create",{
     listBook : db.get("list").value(),
     listUser : db.get("user").value(),
  })
  
}
module.exports.postCreateRentalList = (req,res)=>{
    req.body.id = shortid.generate();
    console.log(req.body)
    db.get('rentalList').push(req.body).write()
    res.redirect('/transaction/index')
}