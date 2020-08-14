
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
    var rentalid = req.params.id;
    var rental = db.get('rentalList').find({id:rentalid}).value()
    res.render('transaction/view',{
        rentalList: rental
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