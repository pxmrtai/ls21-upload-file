const db = require('../db')
const shortid = require('shortid')

module.exports.index = (req,res) => {
    res.render('index',{
       list : db.get('list').value()
    })
}
module.exports.listBook = (req,res)=>{               
    res.render('book',{
       list : db.get('list').value()
    })
}
module.exports.view = (req,res)=>{
    var id = req.params.id;
    var book = db.get('list').find({id:id}).value()
    res.render('view',{
        list: book
    })
}
module.exports.deleteBook =function(req, res) {
     db.get("list")
     .remove({ id: req.params.id})
     .write()
     
 res.redirect('/book')
}
module.exports.postIndex = (req,res)=>{
    req.body.id = shortid.generate();

    db.get('list').push(req.body).write()
    res.redirect('/book')
}
module.exports.update = (req,res)=>{
    db.get('list')
    .find({ id:  req.body.id })
    .assign({title: req.body.title})
    .write()
    res.redirect('/book')
}