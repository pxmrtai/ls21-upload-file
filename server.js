const express = require('express')
const app = express()
const port = 5000
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const shortid = require('shortid');
const adapter = new FileSync('db.json')
const db = low(adapter)
var userRoute = require('./routes/users.route');

const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.set('view engine', 'pug')
app.set('views', './views')

// Set some defaults (required if your JSON file is empty)
db.defaults({ list: [] })
  .write()
 
app.get('/',(req,res) => {
    res.render('index',{
       list : db.get('list').value()
    })
})
// app.get('/users/index',(req,res) => {
//     res.render('users/index',{
//        listUser : db.get('user').value()
//     })
// })
app.get('/:id',(req,res)=>{
    var id = req.params.id;
    var book = db.get('list').find({id:id}).value()
    res.render('view',{
        list: book
    })
})
app.get("/:id/delete", function(req, res) {
     db.get("list")
     .remove({ id: req.params.id})
     .write()
     
 res.redirect('/')
})



app.post('/',(req,res)=>{
    req.body.id = shortid.generate();

    db.get('list').push(req.body).write()
    res.redirect('/')
})
app.post('/update',(req,res)=>{
    db.get('list')
    .find({ id:  req.body.id })
    .assign({title: req.body.title})
    .write()
    res.redirect('/')
})


app.use('/users', userRoute)


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
